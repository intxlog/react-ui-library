import React from 'react'
// import 'react-dates/initialize';
// import { SingleDatePicker } from 'react-dates';
// import PropTypes from 'prop-types'6

import styles from './styles.module.scss'

const DatePicker = () => {
  return (
    <div className={styles.test}>Back to basics</div>
    // <SingleDatePicker
    //   id='uniqueID'
    //   focused
    //   onFocusChange={() => {console.log(`ON focus change`)}}
    //   onDateChange={() => {console.log(`On Date Change`)}}
    // ></SingleDatePicker>
  )
}

//rules for props being passed in
// TextArea.propTypes = {
  
// }

//maintain the name for documentation purposes
DatePicker.displayName = 'DatePicker'

export default DatePicker