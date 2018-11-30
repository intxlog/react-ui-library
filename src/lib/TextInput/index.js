import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//import css
import styles from './styles.module.scss'

//render prop component to be used for formatting other components
class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  handleOnChange = (e) => {
    //update the state and fire the onChange function if one was passed in
    this.setState({value: e.target.value})
    this.props.onChange(e.target.value)
  }

  handleOnBlur = () => {
    this.props.onBlur(this.state.value)
  }

  render(){
    let type = `text`

    //dynamically handle css classnames
    let inputClassNames = classNames({
      [styles.element]: true,
      [styles.error]: this.props.error
    })

    //dynamically handle css classnames
    let textClassNames = classNames({
      [styles.infoText]: true,
      [styles.error]: this.props.error
    })

    //decide the type of input
    if(this.props.password){
      type = `password`
    }


    return (
      <div className={styles.container}>
        <input
          id={this.props.idForLabel}
          className={inputClassNames}
          onChange={(e) => this.handleOnChange(e)}
          onBlur={(e) => this.handleOnBlur(e)}
          style={this.props.inlineStyles}
          placeholder={this.props.placeholder}
          defaultValue={this.props.value}
          type={type}
        />
        <p className={textClassNames}>{this.props.infoText}</p>
      </div>
    )
  }
}

//rules for props being passed in
TextInput.propTypes = {
  placeholder: PropTypes.string,
  infoText: PropTypes.string,
  idForLabel: PropTypes.string,
  inlineStyles: PropTypes.object,
  password: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string
}

// Specifies the default values for props:
TextInput.defaultProps = {
  placeholder: ``,
  infoText: ``,
  idForLabel: ``,
  inlineStyles: {},
  password: false,
  error: false,
  value: '',
  onChange: () => {},
  onBlur: () => {}
}

export default TextInput