import React from 'react'
import PropTypes from 'prop-types'

//import css
import styles from './styles.module.scss'

const RadioButton = ({
  id,
  value,
  name,
  defaultChecked,
  labelText,
  onChange,
  onBlur
}) => {
  return (
    <div className={styles.container}>
      <input
        id={id}
        value={value}
        name={name}
        type={`radio`}
        defaultChecked={defaultChecked}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div className={styles.element}></div>
      <label
        htmlFor={id}
      >{labelText}</label>
    </div>
  )
}

//rules for props being passed in
RadioButton.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  defaultChecked: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

//maintain the name for documentation purposes
RadioButton.displayName = 'RadioButton'

export default RadioButton