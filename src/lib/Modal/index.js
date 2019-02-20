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
          svg = <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="green" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
          break
        case `warning`:
          buttonText = `Ok`
          text = `Warning!`
          className = styles.warning
          svg = <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="orange" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>
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