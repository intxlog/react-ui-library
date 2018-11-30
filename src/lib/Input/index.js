import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//import css
import styles from './styles.module.scss'

// logic behind all the different types of inputs
class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      entered: false,
      error: false
    }
  }

  handleOnChange = (e) => {
    const val = e.target.value
    //update the state and fire the onChange function if one was passed in
    this.setState({value: val})
    this.props.onChange(val)
  }

  handleOnBlur = () => {
    //fire the blur event that was passed in 
    this.props.onBlur(this.state.value)
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

    //dynamically handle css classnames
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
        <p className={textClassNames}>{this.props.infoText}</p>
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
  type: PropTypes.oneOf(['text', 'password', 'select']).isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
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
  onBlur: () => {}
}

export default Input