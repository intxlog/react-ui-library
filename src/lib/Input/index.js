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
      entered: false,
      value: ``,
      isValid: false,
      error: false,
      infoText: null
    }
  }

  componentDidMount() {
    //fire the isValid function letting the user know the input is not valid by default
    if (this.props.defaultValue) {
      let val = this.props.defaultValue
      
      //Clear out the value if the value is IUILIBdefault and make it nothing. This is value that just makes it so we make default values in selects
      if (val === `IUILIBdefault`) {
        val = ``

        this.reportValidity()
      } else {
        this.setState({
          value: val
        })

        this.validate(val)
      }
    } else { //there is not a defaultValue
      this.reportValidity()
    } //end defaultValue check
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.validate(this.state.value)
    }

    //when isValid changes report the value
    if (prevState.isValid !== this.state.isValid) {
      this.reportValidity()
    }

    //if entered becomes true then validate the input
    if (!prevState.entered && this.state.entered) {
      this.validate(this.state.value)
    }

    //check to see if the formSubmitted prop becomes true and validate the field
    if (this.props.formSubmitted !== prevProps.formSubmitted && this.props.formSubmitted) {
      this.setState({
        entered: true
      })
      this.validate(this.state.value)
    }

    //turn off error and make valid if the input becomes disabled
    if (!prevProps.disabled && this.props.disabled) {
      this.setState({
        error: false,
        infoText: null,
        isValid: true,
        entered: false
      })
    }
  }

  handleOnChange = (e) => {
    const val = e.target.value
    this.setState({value: val})
    this.props.onChange(val)  
  }

  handleOnBlur = () => {
    this.setState({entered: true})
    this.props.onBlur(this.state.value)
  }

  checkRequired = (val) => {
    const res = validateRequired(val)
    const isValid = res.valid
    const message = res.message

    if (!isValid) {
      this.setState({
        infoText: message
      })
    } else {
      this.setState({
        infoText: null
      })
    }

    //return a bool value
    return isValid
  }

  checkValid = (val) => {
    const res = this.props.customValidationFunc ? this.props.customValidationFunc(val) : validateString(val, this.props.type)
    const isValid = res.valid
    const message = res.message

    //if it is not valid then set the error state
    if (!isValid) {
      this.setState({
        infoText: message
      })
    } else {
      this.setState({
        infoText: null
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

    if (this.props.required) {
      isValid = this.checkRequired(val)
      requiredPassed = this.checkRequired(val)
    } else {
      requiredPassed = true
    }

    if (this.props.validate && requiredPassed) {
      isValid = this.checkValid(val)
    }

    if (this.props.disabled) {
      isValid = true
    }

    this.setState({
      isValid
    })

    if (this.state.entered) {
      this.setState({
        error: !isValid
      })
    }
  }

  //method to report whether of not the input is valid or not
  reportValidity = () => {
    this.props.isValid(this.state.isValid)
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
          error={this.props.error || this.state.error}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
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
          error={this.props.error || this.state.error}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
        ></TextInput>
        break
    }
    
    return (
      <>
        {element}
        <div className={styles.errorBox}>
          {this.state.error &&
            <p className={classNames({
              [styles.infoText]: true,
              [styles.error]: this.state.error
            })}>{this.state.infoText}</p>
          }
        </div>
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  defaultChecked: PropTypes.bool,
  validate: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'email', 'password', 'select', 'radio', 'checkbox', 'textArea', `zip`, `ein`, `phone`, `ssn`]).isRequired,
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
  idForLabel: ``,
  inlineStyles: {},
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