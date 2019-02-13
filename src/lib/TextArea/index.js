import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//import css
import styles from './styles.module.scss'

const TextArea = ({
  id,
  inlineStyles,
  placholder,
  disabled,
  defaultValue,
  onChange,
  onBlur,
  error
}) => {
  return (
    <textarea    
      id={id}
      style={inlineStyles}
      className={classNames({
        [styles.element]: true,
        [styles.error]: error,
        [styles.disabled]: disabled
      })}
      placeholder={placholder}
      disabled={disabled}
      defaultValue={defaultValue}
      onChange={onChange}
      onBlur={onBlur}
    ></textarea>
  )
}

//rules for props being passed in
TextArea.propTypes = {
  id: PropTypes.string,
  inlineStyles: PropTypes.object,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.bool
}

//maintain the name for documentation purposes
TextArea.displayName = 'TextArea'

export default TextArea