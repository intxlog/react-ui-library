import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//import css
import styles from './styles.module.scss'

//import validator
import validateString from './../../validators'

// logic behind all the different types of inputs
class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      entered: false,
      error: false,
      infoText: null
    }
  }

  handleOnChange = (e) => {
    const val = e.target.value

    //validate if the user has entered the input once before
    if (this.state.entered && this.props.validate) {
      this.validate(val)
    }
    
    //update the state and fire the onChange function if one was passed in
    this.setState({value: val})
    this.props.onChange(val)  
  }

  handleOnBlur = () => {
    const val = this.state.value

    //only run validation if validate is set to true
    if (this.props.validate) {
      //set entered to true
      this.setState({entered: true})
      //run validation
      this.validate(val)
    }

    //fire the blur event that was passed in 
    this.props.onBlur(val)
  }

  validate = (val) => {
    const res = validateString(val, this.props.type)
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
        infoText: null
      })
      //fire the onValid function with 
      this.props.onValid(newValue)
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

    //dynamically handle css classnames for info text
    let textClassNames = classNames({
      [styles.infoText]: true,
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
  className: PropTypes.string,
  inlineStyles: PropTypes.object,
  placeholder: PropTypes.string,
  infoText: PropTypes.string,
  password: PropTypes.bool,
  error: PropTypes.bool,
  defaultValue: PropTypes.string,
  validate: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'email', 'password', 'select']).isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onValid: PropTypes.func
}

// Specifies the default values for props:
Input.defaultProps = {
  placeholder: ``,
  infoText: ``,
  idForLabel: ``,
  inlineStyles: {},
  password: false,
  error: false,
  defaultValue: '',
  validate: true,
  type: 'text',
  onChange: () => {},
  onBlur: () => {},
  onValid: () => {}
}

export default Input