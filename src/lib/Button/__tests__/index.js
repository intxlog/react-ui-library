import React from 'react'

import { shallow } from 'enzyme'
import Button from '..'

describe('Button', () => {
  //define mock functions
  const onClickMock = jest.fn()

  //define default props
  let props = {
    onClick: onClickMock
  }

  //create a shallow wrapper than can be reused
  let wrapper
  //initialize the components
  beforeEach(() => {
    wrapper = shallow(<Button {...props}/>)
  })

  afterEach(() => {
    onClickMock.mockReset()
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  }),
  describe('when fullWidth prop is true', () =>{
    it('renders correctly', () => {
      wrapper.setProps({ 
        fullWidth: true
      })
      expect(wrapper).toMatchSnapshot()
    })
  }),
  describe('when text prop is Example Text', () =>{
    it('renders correctly', () => {
      wrapper.setProps({ 
        text: `Example Text`
      })
      expect(wrapper).toMatchSnapshot()
    })
  }),
  describe('when fontSize prop is 14', () =>{
    it('renders correctly', () => {
      wrapper.setProps({ 
        fontSize: 14
      })
      expect(wrapper).toMatchSnapshot()
    })
  }),
  describe('when type prop', () =>{
    describe('is primary', () =>{
      it('renders correctly', () => {
        wrapper.setProps({ 
          type: `primary`
        })
        expect(wrapper).toMatchSnapshot()
      })
    }),
    describe('is plain', () =>{
      it('renders correctly', () => {
        wrapper.setProps({ 
          type: `plain`
        })
        expect(wrapper).toMatchSnapshot()
      })
    }),
    describe('is link', () =>{
      it('renders correctly', () => {
        wrapper.setProps({ 
          type: `link`,
          linkTo: '/'
        })
        expect(wrapper).toMatchSnapshot()
      })
    }),
    describe('is routedLink', () =>{
      it('renders correctly', () => {
        wrapper.setProps({ 
          type: `routedLink`,
          linkTo: '/'
        })
        expect(wrapper).toMatchSnapshot()
      })
    })
  }),
  describe('when handleOnClick method is called', () => {
    it('calls the correct function', () => {
      expect(wrapper.instance().handleOnClick()).toEqual(undefined)
      expect(onClickMock).toHaveBeenCalled()
    })
  }),
  describe('when user clicks', () => {
    it('calls the correct function', () => {
      const buttonElement = wrapper.find('.button')
      buttonElement.simulate('click')
      expect(onClickMock).toHaveBeenCalledTimes(1)
      expect(onClickMock).toHaveBeenCalledWith()
    })
  })
})