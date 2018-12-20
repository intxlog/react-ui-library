import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//import css
import styles from './styles.module.scss'

//import validator
import validateString from './../../validators'
import validateRequired from './../../validators/required'

// logic behind all the different types of inputs
class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      entered: false,
      validValue: null,
      error: false,
      infoText: null
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
    let fireFlag = false
    //create a flag to see if required has passed to see if we will need to validate
    let requiredPassed = false

    //check if this is required and passes the requirements
    if (this.props.required) {
      fireFlag = this.checkRequired(val)
      requiredPassed = this.checkRequired(val)
    } else {
      requiredPassed = true
    }

    //check if validate prop is true and it passes the requirements
    if (this.props.validate && requiredPassed) {
      fireFlag = this.checkValid(val)
    }

    if (fireFlag) {
      //fire the onValid function with the valid value
      this.props.onValid(this.state.validValue)
    }
  }

  render(){
    //var to handle the html type
    let type = null
    //var to store the html element we are going to display
    let element = null

    //dynamically handle css classnames for inputs
    let inputClassNames = classNames({
      [styles.input]: true,
      [this.props.className]: this.props.className,
      [styles.error]: this.props.error || this.state.error
    })

    //dynamically handle css classnames for selects
    let selectClassNames = classNames({
      [styles.selectWrapper]: true,
      [this.props.className]: this.props.className,
      [styles.error]: this.props.error || this.state.error
    })

    //dynamically handle css classnames for radio
    let radioClassNames = classNames({
      [styles.radio]: true,
      [this.props.className]: this.props.className
    })

    //dynamically handle css classnames for checkbox
    let checkboxClassNames = classNames({
      [styles.checkbox]: true,
      [this.props.className]: this.props.className
    })

    //dynamically handle css classnames for info text
    let textClassNames = classNames({
      [styles.infoText]: true,
      [styles.error]: this.props.error || this.state.error
    })

    //dynamically handle css classnames for textArea
    let textAreaClassNames = classNames({
      [styles.textArea]: true,
      [styles.error]: this.props.error || this.state.error
    })

    //logic for the different html input types
    switch (this.props.type) {
      case `password`:
        type = `password`
        break
      default:
        type = `text`
        break
    }

    //make the default html element an input
    element =  <input
      id={this.props.idForLabel}
      style={this.props.inlineStyles}
      className={inputClassNames}
      placeholder={this.props.placeholder}
      defaultValue={this.props.defaultValue}
      type={type}
      onChange={this.handleOnChange}
      onBlur={this.handleOnBlur}
    />

    //if type is select then make the element a select tag
    if (this.props.type === 'select') {
      element = <div
        className={selectClassNames} 
        style={this.props.inlineStyles} 
      >
        <select
          id={this.props.idForLabel}
          className={styles.select}
          defaultValue={this.props.defaultValue}
          onChange={this.handleOnChange}
        >
          {this.props.children}
        </select>
      </div>
    }

    //if type is radio then make the element a input with type radio
    if (this.props.type === 'radio') {
      element = <div className={styles.radioWrapper}>
        <input
          id={this.props.idForLabel}
          value={this.props.value}
          name={this.props.name}
          type={`radio`}
          defaultChecked={this.props.defaultChecked}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
        />
        <div className={radioClassNames}></div>
        <label
          htmlFor={this.props.idForLabel}
          style={this.props.inlineStyles}
        >{this.props.labelText}</label>
      </div>
    }

    //if type is checkbox then make the element a input with type checkbox
    if (this.props.type === 'checkbox') {
      element = <div className={styles.checkBoxWrapper}>
        <input
          id={this.props.idForLabel}
          value={this.props.value}
          name={this.props.name}
          type={`checkbox`}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
        />
        <div className={checkboxClassNames}></div>
        <label
          htmlFor={this.props.idForLabel}
          style={this.props.inlineStyles}
        >{this.props.labelText}</label>
      </div>
    }

      //if type is checkbox then make the element a input with type checkbox
      if (this.props.type === 'textArea') {
        element = <textarea       
          id={this.props.idForLabel}
          style={this.props.inlineStyles}
          className={textAreaClassNames}
          placeholder={this.props.placeholder}
          defaultValue={this.props.defaultValue}
          type={type}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
        ></textarea>
      }

    return (
      <div>
        {element}
        <p className={textClassNames}>{this.props.infoText || this.state.infoText}</p>
      </div>
    )
  }
}

//rules for props being passed in
Input.propTypes = {
  idForLabel: PropTypes.string,
  labelText: PropTypes.string,
  className: PropTypes.string,
  inlineStyles: PropTypes.object,
  placeholder: PropTypes.string,
  infoText: PropTypes.string,
  value: PropTypes.string,
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
  onValid: PropTypes.func
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
  onValid: () => {}
}

//maintain the name for documentation purposes
Input.displayName = 'Input'

export default Input