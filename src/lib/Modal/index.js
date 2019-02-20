import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//import components
import Button from './../Button'

//import css
import styles from './styles.module.scss'

//render prop component to be used for formatting other components
class Modal extends React.Component {
  render(){
    //var to house the content
    let modal = null
    let content = null
    let buttonText = null
    let text = null
    let className = null
    let svg = null

    
    //if customContent is passed in then ignore all the rules and just make the content the custom content
    if (this.props.customContent) {
      content = this.props.customContent
    } else {//display the default content
      //switch statement to handle the types
      switch (this.props.type) {
        case `success`:
          buttonText = `Ok`
          text = `Success!`
          className = styles.success
          break
        case `warning`:
          buttonText = `Ok`
          text = `Warning!`
          className = styles.warning
          break
        case `error`:
          buttonText = `Ok`
          text = `Error!`
          className = styles.error
          svg = <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" ><path fill="red" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>
          break
      }
  
      //dynamically handle classNames
      let circleClassNames = classNames({
        [styles.circle]: true,
        [className]: true
      })

      //if text is passed then make the text the value passed in
      if (this.props.text) {
        text = this.props.text
      }

      //if buttonText is passed in then make the buttonText value the value passed in
      if (this.props.buttonText) {
        buttonText = this.props.buttonText
      }
  
      content = <>
        <div className={circleClassNames}>
          {svg}
          {/* <div className={styles.circleContent}>{svg}</div> */}
        </div>
        <p className={styles.text}>{text}</p>
        <Button
          text={buttonText}
          inlineStyles={{minWidth: '120px'}}
          onClick={this.props.closeFunc}
        ></Button>
      </>
    }// end the customContent if

    //if isOpen is true then serve up the modal
    if (this.props.isOpen) {
      modal = <div className={styles.container}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={this.props.closeFunc}><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" ><path fill="white" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg></button>
          {content}
        </div>
      </div>
    }

    return modal
  }
}

//rules for props being passed in
Modal.propTypes = {
  isOpen: PropTypes.bool,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  closeFunc: PropTypes.func,
  customContent: PropTypes.object,
  type: PropTypes.oneOf(['success', 'warning', 'error'])
}

// Specifies the default values for props:
Modal.defaultProps = {
  type: `success`
}

Modal.displayName = 'Modal'

export default Modal