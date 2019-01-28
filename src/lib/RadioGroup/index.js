import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//import css
import styles from './styles.module.scss'

// logic behind all the different types of inputs
class RadioGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
      error: false,
      isValid: false
    }
  }

  componentDidMount() {
    this.reportValidity()

    //if there is a default value then make it the value
    if (this.props.defaultValue !== null) {
      this.setState({
        value: this.props.defaultValue
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //when isValid changes report the value
    if (prevState.isValid !== this.state.isValid) {
      this.reportValidity()
      this.setState({
        error: !this.state.isValid
      })
    }

    if (prevState.value === null && this.state.value !== null) {
      this.setState({
        isValid: true
      })
    }

    //check to see if the formSubmitted prop becomes true
    if (this.props.required) {
      if (this.props.formSubmitted !== prevProps.formSubmitted && this.props.formSubmitted) {
        if (!this.state.isValid) {
          this.setState({
            error: true
          })
        }
      }
    }
  }

  handleOnChange = (e) => {
    const val = e.target.value
    this.setState({
      value: val
    })
    this.props.onChange(val)
  }

  //method to report whether of not the input is valid or not
  reportValidity = () => {
    this.props.isValid(this.state.isValid)
  }

  render(){
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        id: `${this.props.name}${index}`,
        error: this.state.error || this.props.error,
        name: this.props.name,
        disabled: this.props.disabled,
        onChange: this.handleOnChange,
        defaultValue: this.props.defaultValue
      })
    })

    return (
      <div className={styles.container}>
        <div className={classNames({
            [styles.childrenWrapper]: true,
            [styles.horizontal]: this.props.direction === `horizontal`
          })}>
          {children}
        </div>
      </div>
    )
  }
}

//rules for props being passed in
RadioGroup.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  isValid: PropTypes.func,
  direction: PropTypes.oneOf([`horizontal`, `vertical`]).isRequired,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ])
}

// Specifies the default values for props:
RadioGroup.defaultProps = {
  direction: `vertical`,
  onChange: () => {},
  isValid: () => {}
}

//maintain the name for documentation purposes
RadioGroup.displayName = 'RadioGroup'

export default RadioGroup