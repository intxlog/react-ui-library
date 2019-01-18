import React from 'react'
import { shallow } from 'enzyme'
import RadioGroup from '..'

describe('RadioGroup', () => {
  //mock functions
  const onChangeMock = jest.fn()
  const isValidMock = jest.fn()

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
  })

  //reset the mocks after each test
  afterEach(() => {
    onChangeMock.mockReset()
    isValidMock.mockReset()
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('when formSubmitted prop changes and becomes true', () => {
    it('sets the correct state', () => {
      wrapper.setProps({
        formSubmitted: true
      })

      expect(wrapper.state().error).toEqual(true)
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