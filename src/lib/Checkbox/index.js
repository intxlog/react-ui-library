import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
//import css
import styles from './styles.module.scss'

const Checkbox = ({
  id,
  classes,
  value,
  name,
  labelText,
  defaultChecked,
  onChange,
  onBlur
}) => {
  return (
    <div
    className={classNames({
      [styles.container]: true,
      [classes] : classes
    })}
  >
      <input
        id={id}
        value={value}
        name={name}
        type={`checkbox`}
        defaultChecked={defaultChecked}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div className={styles.checkbox}></div>
      <label
        htmlFor={id}
      >{labelText}</label>
    </div>
  )
}

//rules for props being passed in
Checkbox.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

//maintain the name for documentation purposes
Checkbox.displayName = 'Checkbox'

export default Checkbox