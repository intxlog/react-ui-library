import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {phone} from './../../validators/formatting'
import styles from './styles.module.scss'
import classNames from 'classnames'

export default class Phone extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
    }
  }

  //this.onChange handles the current input value as an uncontrolled component
  //this.props.onChange is triggered to handle validation similar to the controlled components in Input
	onChange= (event) => {
    event.preventDefault();
    let newVal = phone(event.target.value)
    this.setState({
      value: newVal
    })
    this.props.onChange(event)		 
  }

  render() {
    return (
      <input    
        id={this.props.id} 
        style={this.props.inlineStyles}
        className={classNames({
          [styles.element]: true,
          [styles.error]: this.props.error,
          [styles.disabled]: this.props.disabled,
          [this.props.className]: this.props.className
        })}
        placeholder={this.props.placeholder}
        disabled={this.props.disabled}
        value={this.state.value}
        type={this.props.type}
        onChange={this.onChange}    
        onBlur={this.props.onBlur}     
      ></input>
    )
  }
}

//rules for props being passed in
Phone.propTypes = {
  id: PropTypes.string,
  inlineStyles: PropTypes.object,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  type: PropTypes.oneOf([`text`, `phone`]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.bool
}

//maintain the name for documentation purposes
Phone.displayName = 'Phone'


