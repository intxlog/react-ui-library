import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//import css
import styles from './styles.module.scss'

//render prop component to be used for formatting other components
class Button extends React.Component {
  handleOnClick = () => {
    this.props.onClick()
  }

  render(){
    let inlineStyles = this.props.inlineStyles || {}
    let type = `button`

    //logic for dynamic classnames
    let btnClass = classNames({
      [this.props.className]: this.props.className,
      [styles.button]: true,
      [styles.plain]: this.props.type === `plain`,
      [styles.primary]: this.props.type === `primary`,
      [styles.small]: this.props.size === `small`,
      [styles.medium]: this.props.size === `medium`,
      [styles.large]: this.props.size === `large`
    })
    
    //handle full width conditional
    if (this.props.fullWidth) {
      inlineStyles.width = `100%`
    }
    
    //if there is fontSize then overwrite the defualt
    if(this.props.fontSize) {
      inlineStyles.fontSize = `${this.props.fontSize}px`
      inlineStyles.lineHeight = `${this.props.fontSize}px`
    }

    //if submitsForm is true then make its type submit
    if (this.props.submitsForm) {
      type = `submit`
    }

    //declare a default element
    let element =  <button 
      className={btnClass} 
      style={inlineStyles} 
      disabled={this.props.disabled}
      onClick={this.props.onClick}
      type={type}
    >{this.props.text}</button>
    
    //logic to display a button element or a link
    if (this.props.type === `link`) {
      element = <a className={styles.link} href={this.props.linkTo} target='_blank' rel='noopener'>{this.props.text}</a>
    }

    //logic to display a button element or a routed link
    if (this.props.type === `routedLink`) {
      element = <Link className={styles.link} to={this.props.linkTo}>{this.props.text}</Link>
    }

    //logic to display a button element or phone link
    if (this.props.type === `phoneLink`) {
      element = <a href={`tel:+${process.env.REACT_APP_CARRIER_DEPT_PHONE}`} target='_blank'  rel="noopener noreferrer" >{process.env.REACT_APP_CARRIER_DEPT_PHONE}</a>
    }

    //logic to display a button element or email link
    if (this.props.type === `emailLink`) {
      element = <a href={`mailto:${process.env.REACT_APP_CARRIER_SERVICES_EMAIL}`}  rel='noopener noreferrer' target='_top'>{process.env.REACT_APP_CARRIER_SERVICES_EMAIL}</a>
    }
    return (element)
  }
}

//rules for props being passed in
Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf([`plain`, `primary`, `link`, `routedLink`, `phoneLink`, `emailLink`]),
  size: PropTypes.oneOf([`small`, `medium`, `large`]),
  disabled: PropTypes.bool,
  linkTo: PropTypes.string,
  fontSize: PropTypes.number,
  fullWidth: PropTypes.bool,
  submitsForm: PropTypes.bool,
  onClick: PropTypes.func,
  inlineStyles: PropTypes.object,
  className: PropTypes.string
}

// Specifies the default values for props:
Button.defaultProps = {
  text: `None Provided`,
  type: `primary`,
  size: `medium`,
  fullWidth: false,
  submitsForm: false
}

//maintain the name for documentation purposes
Button.displayName = 'Button'

export default Button