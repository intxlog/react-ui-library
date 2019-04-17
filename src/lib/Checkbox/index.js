import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
//import css
import styles from './styles.module.scss'

const Checkbox = ({
  id,
  className,
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
      [className] : className
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
      <svg className={styles.check} aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
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
  className: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

//maintain the name for documentation purposes
Checkbox.displayName = 'Checkbox'

export default Checkbox