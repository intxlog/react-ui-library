import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//import css
import styles from './styles.module.scss'

//render prop component to be used for formatting other components
class DropDownSelect extends React.Component {

  handleOnChange = (e) => {
    //update the state and fire the onChange function if one was passed in
    this.props.onChange(e.target.value)
  }

  render(){
    //array to house options
    let optionsArray = []

    //handle logic for options being passed in
    const options = this.props.options
    //loop through the options and add them to the options array
    for (let i = 0; i < options.length; i++) {
      const optionObj = options[i]
      
      optionsArray.push(
        <option 
          key={i} 
          value={optionObj.value}
        >{optionObj.text}</option>
      )
    }

    //dynamically handle css classnames
    let containerClassNames = classNames({
      [styles.container]: true,
      [styles.error]: this.props.error,
      [this.props.className]: this.props.className
    })
    
    return (
      <div 
        className={containerClassNames} 
        style={this.props.inlineStyles} 
      >
        <select 
          defaultValue={this.props.defaultValue} 
          onChange={(e) => this.handleOnChange(e)}
          className={styles.element} 
          id={this.props.idForLabel}
        >
          <option value="default" disabled>Choose an option</option>
          {optionsArray}       
        </select>
      </div>
    )
  }
}

//rules for props being passed in
DropDownSelect.propTypes = {
  options: PropTypes.array,
  defaultValue: PropTypes.string,
  defaultText: PropTypes.string,
  idForLabel: PropTypes.string,
  inlineStyles: PropTypes.object,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string
}

// Specifies the default values for props:
DropDownSelect.defaultProps = {
  options: [],
  defaultValue: `default`,
  idForLabel: ``,
  inlineStyles: {},
  password: false,
  error: false,
  value: '',
  onChange: () => {}
}

export default DropDownSelect