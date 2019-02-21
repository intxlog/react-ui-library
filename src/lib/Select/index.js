import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//import css
import styles from './styles.module.scss'

const Select = ({
  id,
  className,
  children,
  disabled,
  defaultValue,
  onChange,
  onBlur,
  error
}) => {
  return (
    <div
      className={classNames({
        [className] : className,
        [styles.wrapper]: true
      })}
    >
      <select
        id={id}
        className={classNames({
          [styles.element]: true,
          [styles.disabled]: disabled,
          [styles.error]: error
        })}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
      >
        {children}
      </select>
    </div>
  )
}

//rules for props being passed in
Select.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.bool
}

//maintain the name for documentation purposes
Select.displayName = 'Select'

export default Select