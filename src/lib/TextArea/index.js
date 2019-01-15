import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//import css
import styles from './styles.module.scss'

const TextArea = ({
  attr,
  error
}) => {
  return (
    <textarea    
      {...attr}   
      className={classNames({
        [styles.element]: true,
        [styles.error]: error
      })}
    ></textarea>
  )
}

//rules for props being passed in
TextArea.propTypes = {
  attr: PropTypes.object.isRequired,
  error: PropTypes.bool
}

//maintain the name for documentation purposes
TextArea.displayName = 'TextArea'

export default TextArea