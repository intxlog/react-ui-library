import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//import css
import styles from './styles.module.scss'

const Checkbox = ({
  attr,
  error
}) => {
  return (
    <div className={styles.container}>
      <input
        {...attr}
        type={`checkbox`}
        name={name}
      />
      <div className={classNames({
        [styles.checkbox]: true,
        [this.props.className]: this.props.className
      })}></div>
      <label
        htmlFor={attr.id}
        style={this.props.inlineStyles}
      >{this.props.labelText}</label>
    </div>
  )
}

//rules for props being passed in
Checkbox.propTypes = {
  attr: PropTypes.object.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string
}

//maintain the name for documentation purposes
Checkbox.displayName = 'Checkbox'

export default Checkbox