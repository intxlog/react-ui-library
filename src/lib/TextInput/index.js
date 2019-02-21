import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//import css
import styles from './styles.module.scss'

const TextInput = ({
  id,
  className,
  inlineStyles,
  placeholder,
  disabled,
  defaultValue,
  type,
  onChange,
  onBlur,
  error
}) => {
  return (
    <input    
      id={id}
      style={inlineStyles}
      className={classNames({
        [className]: className,
        [styles.element]: true,
        [styles.error]: error,
        [styles.disabled]: disabled
      })}
      placeholder={placeholder}
      disabled={disabled}
      defaultValue={defaultValue}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
    ></input>
  )
}

//rules for props being passed in
TextInput.propTypes = {
  id: PropTypes.string,
  inlineStyles: PropTypes.object,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  type: PropTypes.oneOf([`text`, `password`]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.bool
}

//maintain the name for documentation purposes
TextInput.displayName = 'TextInput'

export default TextInput