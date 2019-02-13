import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//import css
import styles from './styles.module.scss'

const Select = ({
  id,
  children,
  disabled,
  defaultValue,
  onChange,
  onBlur,
  error
}) => {
  //TODO: this needs to be moved to a container once refactored
  const isFirefox = !!navigator.userAgent.match(/firefox/i)
  return (
    <div
      className={classNames({
        [styles.wrapper]: true
      })} 
    >
      <select
        id={id}
        className={classNames({
          [styles.element]: true,
          [styles.disabled]: disabled,
          [styles.error]: error,
          [styles.ffHack]: isFirefox
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