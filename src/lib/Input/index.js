import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//import css
import styles from './styles.module.scss'

//import validators
import validateString from './../../validators'
import validateRequired from './../../validators/required'

//import components
import TextInput from '../TextInput'
import TextArea from '../TextArea'
import Checkbox from '../Checkbox'
import RadioButton from '../RadioButton'
import Select from '../Select'

// logic behind all the different types of inputs
class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      entered: false,
      isValid: false,
      validValue: null,
      error: false,
      infoText: null
    }
  }

  componentDidMount() {
    //fire the isValid function letting the user know the input is not valid by default
    //check to make sure there is not a defaultValue
    if (this.props.defaultValue) {
      let val = this.props.defaultValue
      
      //Clear out the value if the value is IUILIBdefault and make it nothing. This is value that just makes it so we make default values in selects
      if (val === `IUILIBdefault`) {
        val = ``

        //fire the isValid function if one is passed in
        this.props.isValid(this.state.isValid)
      } else {
        //set state as the defaultValue
        this.setState({
          value: val
        })

        //validate the value
        this.validate(val)
      }
    } else { //there is not a defaultValue
      //fire the isValid function if one is passed in
      this.props.isValid(this.state.isValid)
    } //end defaultValue check
  }

  componentDidUpdate(prevProps, prevState) {
    //fire isValid function from props if isValid from state changed
    if (this.state.isValid !== prevState.isValid) {
      this.props.isValid(this.state.isValid)
    }

    //check to see if the formSubmitted prop becomes true and validate the field
    if (this.props.formSubmitted !== prevProps.formSubmitted && this.props.formSubmitted) {
      //change the entered value in state to true to mimick the user entering the field
      this.setState({
        entered: true
      })

      //validate the value
      this.validate(this.state.value)
    }
  }

  handleOnChange = (e) => {
    const val = e.target.value

    //check if the user entered the input once before
    if (this.state.entered) {
      //run validation
      this.validate(val)
    }
    
    //update the state and fire the onChange function if one was passed in
    this.setState({value: val})
    this.props.onChange(val)  
  }

  handleOnBlur = () => {
    const val = this.state.value

    //set entered to true
    this.setState({entered: true})

    //run validation
    this.validate(val)

    //fire the blur event that was passed in 
    this.props.onBlur(val)
  }

  checkRequired = (val) => {
    const res = validateRequired(val)
    const isValid = res.valid
    const message = res.message
    const newValue = res.value

    if (!isValid) {
      this.setState({
        error: true,
        infoText: message
      })
    } else {
      this.setState({
        error: false,
        infoText: null,
        validValue: newValue
      })
    }

    //return a bool value
    return isValid
  }

  checkValid = (val) => {
    //shorthand if statement
    const res = this.props.customValidationFunc ? this.props.customValidationFunc(val) : validateString(val, this.props.type)
    const isValid = res.valid
    const message = res.message
    const newValue = res.value

    //if it is not valid then set the error state
    if (!isValid) {
      this.setState({
        error: true,
        infoText: message
      })
    } else {
      this.setState({
        error: false,
        infoText: null,
        validValue: newValue
      })
    }

    //return a bool value
    return isValid
  }

  validate = (val) => {
    //create a flag to see if we should fire the onValid function
    let isValid = false
    //create a flag to see if required has passed to see if we will need to validate
    let requiredPassed = false

    //check if this is required and passes the requirements
    if (this.props.required) {
      isValid = this.checkRequired(val)
      requiredPassed = this.checkRequired(val)
    } else {
      requiredPassed = true
    }

    //check if validate prop is true and it passes the requirements
    if (this.props.validate && requiredPassed) {
      isValid = this.checkValid(val)
    }

    //set isValid in state to the proper value
    this.setState({
      isValid
    })
  }

  render(){
    //var to handle the html type
    let type = null
    //var to store the html element we are going to display
    let element = null
    
    //logic for the different html input types
    switch (this.props.type) {
      case `password`:
        type = `password`
        break
      default:
        type = `text`
        break
    }

    //switch statement to handle different html cases
    switch (this.props.type) {
      case `select`:
        element = <Select
          id={this.props.idForLabel}
          defaultValue={this.props.defaultValue}
          disabled={this.props.disabled}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
          error={this.props.error}
        >
          {this.props.children}
        </Select>
        break

      case `radio`:
        element = <RadioButton
          id={this.props.idForLabel}
          value={this.props.value}
          name={this.props.name}
          labelText={this.props.labelText}
          defaultChecked={this.props.defaultChecked}
          disabled={this.props.disabled}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
        />
        break

      case `checkbox`:
        element = <Checkbox
          id={this.props.idForLabel}
          value={this.props.value}
          name={this.props.name}
          defaultChecked={this.props.defaultChecked}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
          labelText={this.props.labelText}
        ></Checkbox>
        break

      case `textArea`:
        element = <TextArea
          id={this.props.idForLabel}
          inlineStyles={this.props.inlineStyles}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          defaultValue={this.props.defaultValue}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
          error={this.props.error}
        ></TextArea>
        break

      default:
        element = <TextInput
          id={this.props.idForLabel}
          inlineStyles={this.props.inlineStyles}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          defaultValue={this.props.defaultValue}
          type={type}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
        ></TextInput>
        break
    }
    
    return (
      <>
        {element}
        <p className={classNames({
          [styles.infoText]: true,
          [styles.error]: this.props.error || this.state.error
        })}>{this.props.infoText || this.state.infoText}</p>
      </>
    )
  }
}

//rules for props being passed in
Input.propTypes = {
  idForLabel: PropTypes.string,
  labelText: PropTypes.string,
  inlineStyles: PropTypes.object,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  infoText: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
    ]),
  name: PropTypes.string,
  error: PropTypes.bool,
  defaultValue: PropTypes.string,
  defaultChecked: PropTypes.bool,
  validate: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'email', 'password', 'select', 'radio', 'checkbox', 'textArea']).isRequired,
  customValidationFunc: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isValid: PropTypes.func,
  formSubmitted: PropTypes.bool
}

// Specifies the default values for props:
Input.defaultProps = {
  labelText: `None Provided`,
  placeholder: ``,
  infoText: ``,
  idForLabel: ``,
  inlineStyles: {},
  error: false,
  defaultValue: '',
  validate: true,
  required: false,
  type: 'text',
  onChange: () => {},
  onBlur: () => {},
  isValid: () => {}
}

//maintain the name for documentation purposes
Input.displayName = 'Input'

export default Input