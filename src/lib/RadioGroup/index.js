import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//import css
import styles from './styles.module.scss'

// logic behind all the different types of inputs
class RadioGroup extends React.Component {
  state = {
    value: this.props.defaultValue || null,
    error: false,
    isValid: false,
    refreshKey: 1
  }

  componentDidMount() {
    this.reportValidity()

    if (this.props.disabled) {
      this.disableComponent()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //when isValid changes report the value
    if (prevState.isValid !== this.state.isValid) {
      this.reportValidity()

      if (this.props.formSubmitted) {
        this.setState({
          error: !this.state.isValid
        })
      }
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

    //check to see if the component became disabled
    if (!prevProps.disabled && this.props.disabled) {
      this.disableComponent()
    }

    if (prevProps.disabled && !this.props.disabled) {
      this.enableComponent()
    }
  }

  handleOnChange = (e) => {
    const val = e.target.value
    console.log(e.target.type)
    this.setState({
      value: isNaN(val) ? val : parseInt(val)
    })
    this.props.onChange(val)
  }

  //method to report whether of not the input is valid or not
  reportValidity = () => {
    this.props.isValid(this.state.isValid)
  }

  //method to handle when the component becomes disabled
  disableComponent = () => {
    let keyValue = this.state.refreshKey
    this.setState({
      isValid: true,
      refreshKey: keyValue + 1
    })
  }

  enableComponent = () => {
    let keyValue = this.state.refreshKey
    let isValid = true

    if (this.state.value === null) {
      isValid = false
    }

    this.setState({
      refreshKey: keyValue + 1,
      isValid
    })
  }

  render(){
    const children = React.Children.map(this.props.children, (child, index) => {
      let props = {}

      //make sure we only pass props and methods to children with a display name of RadioButton
      if (child.type.displayName === `RadioButton`) {
        props = {
          key: `${this.state.refreshKey}`,
          id: `${this.props.name}${index}`,
          error: this.state.error || this.props.error,
          name: this.props.name,
          disabled: this.props.disabled,
          onChange: this.handleOnChange,
          defaultValue: this.state.value
        }
      }
      
      return React.cloneElement(child, props)
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