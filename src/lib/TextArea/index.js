import React from 'react'
import PropTypes from 'prop-types'

//import css
import styles from './styles.module.scss'

const TextArea = ({
  attr
}) => {
  return (
    <textarea    
      {...attr}   
      className={styles.element}
    ></textarea>
  )
}

//rules for props being passed in
TextArea.propTypes = {
 attr: PropTypes.object.isRequired
}

//maintain the name for documentation purposes
TextArea.displayName = 'TextArea'

export default TextArea