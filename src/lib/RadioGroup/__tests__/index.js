import React from 'react'
import { shallow } from 'enzyme'
import RadioGroup from '..'

describe('RadioGroup', () => {
  //mock functions
  const onChangeMock = jest.fn()
  const isValidMock = jest.fn()

  //Spies
  let reportValiditySpy
  let disableComponentSpy
  let enableComponentSpy

  let props = {
    name: `example`,
    onChange: onChangeMock,
    isValid: isValidMock
  }
  
  //create a shallow wrapper that can be reused
  let wrapper
  //initialize the components
  beforeEach(() => {
    wrapper = shallow(<RadioGroup {...props}/>)
    reportValiditySpy = jest.spyOn(wrapper.instance(), 'reportValidity')
    disableComponentSpy = jest.spyOn(wrapper.instance(), 'disableComponent')
    enableComponentSpy = jest.spyOn(wrapper.instance(), 'enableComponent')
  })

  //reset the mocks after each test
  afterEach(() => {
    onChangeMock.mockReset()
    isValidMock.mockReset()
    reportValiditySpy.mockRestore()
    disableComponentSpy.mockRestore()
    enableComponentSpy.mockRestore()
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('when the component mounts', () => {
    describe('when disabled is true', () => {
      it('calls the correct method', () => {
        wrapper.setProps({
          disabled: true
        })
        wrapper.instance().componentDidMount()
        expect(disableComponentSpy).toHaveBeenCalled()
      })
    })
  })

  describe('componentDidUpdate', () => {
    describe('when isValid from state changes', () => {
      it('calls the correct method', () => {
        wrapper.setState({
          isValid: true
        })
        expect(reportValiditySpy).toHaveBeenCalled()
      })

      describe('when formSubmitted is true', () => {
        it('sets the correct state', () => {
          wrapper.setProps({
            formSubmitted: true
          })
          wrapper.setState({
            isValid: true
          })
          expect(wrapper.state().error).toEqual(!wrapper.state().isValid)
        })
      })
    })

    describe('when valid from state becomes not null', () => {
      it('sets the correct state', () => {
        wrapper.setState({
          value: `test`
        })
        expect(wrapper.state().isValid).toEqual(true)
      })
    })

    describe('when required prop is true and formSubmitted prop becomes true and isvalid is false', () => {
      it('sets the correct state', () => {
        wrapper.setProps({
          required: true,
          formSubmitted: false
        })
        wrapper.setState({
          isValid: false
        })
        //fire the update
        wrapper.setProps({
          formSubmitted: true
        })
        expect(wrapper.state().error).toEqual(true)
      })
    })

    describe('when disabled prop becomes true', () => {
      it('calls the correct method', () => {
        wrapper.setProps({
          disabled: true
        })
        expect(disableComponentSpy).toHaveBeenCalled()
      })
    })

    describe('when disabled prop becomes false', () => {
      it('calls the correct method', () => {
        wrapper.setProps({
          disabled: true
        })
        wrapper.setProps({
          disabled: false
        })
        expect(enableComponentSpy).toHaveBeenCalled()
      })
    })
  })

  //Methods
  describe('when handleOnChange is called', () => {
    it('calls the correct function', () => {
      const e = {
        target: {
          value: 'test'
        }
      }

      wrapper.instance().handleOnChange(e)
      expect(onChangeMock).toHaveBeenCalled()
      expect(onChangeMock).toHaveBeenCalledWith('test')
    })
    it('sets the correct state', () => {
      const e = {
        target: {
          value: 'test'
        }
      }

      wrapper.instance().handleOnChange(e)
      expect(wrapper.state().value).toEqual('test')
    })
  })
})