import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

//import css
import styles from './styles.module.scss'

//render prop component to be used for formatting other components
class Button extends React.Component {
  render(){
    //logic for dynamic classnames
    let btnClass = classNames({
      [styles.link]: this.props.type === `link`,
      [styles.plain]: this.props.type === `plain`,
      [styles.primary]: this.props.type === `primary`,
      [styles.small]: this.props.size === `small`,
      [styles.large]: this.props.size === `large`,
      [styles.fullWidth]: this.props.fullWidth,
      [this.props.className]: this.props.className
    })

    //declare a default element
    let element =  <button 
      className={btnClass} 
      disabled={this.props.disabled}
      onClick={this.props.onClick}
      type={this.props.submitsForm ? `submit` : `button`}
    >{this.props.text}</button>
    
    //logic to display a button element or a link
    if (this.props.elementType === `link`) {
      element = <a className={btnClass} href={this.props.linkTo} target={this.props.target} rel={this.props.rel}>{this.props.text}</a>
    }

    //logic to display a button element or a routed link
    if (this.props.elementType === `routedLink`) {
      let Link = this.props.linkComponent
      if (Link !== undefined) {
        element = <Link className={btnClass} to={this.props.linkTo}>{this.props.text}</Link>
      } else {
        console.error(`You must provide a Link component from react-router-dom`)
      }
    }

    return (element)
  }
}

//rules for props being passed in
Button.propTypes = {
  text: PropTypes.string,
  elementType: PropTypes.oneOf([`button`, `link`, `routedLink`]),
  type: PropTypes.oneOf([`plain`, `primary`, `link`]),
  size: PropTypes.oneOf([`small`, `large`]),
  target:PropTypes.string, 
  rel: PropTypes.string,
  disabled: PropTypes.bool,
  linkTo: PropTypes.string,
  fullWidth: PropTypes.bool,
  submitsForm: PropTypes.bool,
  // onClick: PropTypes.func,
  className: PropTypes.string,
  linkComponent: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ])
}

// Specifies the default values for props:
Button.defaultProps = {
  text: `None Provided`,
  type: `primary`,
  elementType: `button`,
  fullWidth: false,
  submitsForm: false,
  target: `_blank`,
  rel: `noopener noreferrer`
}

//maintain the name for documentation purposes
Button.displayName = 'Button'

export default Button