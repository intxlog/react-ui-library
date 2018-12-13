import React from 'react'

import {  shallow } from 'enzyme'
import Input from '..'

//create a shallow wrapper that can be reused
let wrapper
//initialize the components
beforeEach(() => {
  wrapper = shallow(<Input {...props}/>)
})
describe('Input', () => {
  it('renders correctly', () => {
    // const wrapper = shallow( <Input/> )
    expect(wrapper).toMatchSnapshot()
  }),
  describe('when password prop is true', () => {
    it('renders correctly', () => {
      wrapper.setProps({
          password:true
      })
      expect(wrapper).toMatchSnapshot()
    })
  }),
  describe('when idForLabel prop is passed in', () => {
    it('renders correctly', () => {
        wrapper.setProps({
          idForLabel:`exampleID`
      })
      expect(wrapper).toMatchSnapshot()
    })
  }),
  describe('when placeholder prop is passed in', () => {
    it('renders correctly', () => {
      wrapper.setProps({
          placeholder:`Example Text`
      })
      expect(wrapper).toMatchSnapshot()
    })
  }),
  describe('when infoText prop is passed in', () => {
    it('renders correctly', () => {
      wrapper.setProps({
          infoText:`Example Text`
          })
      expect(wrapper).toMatchSnapshot()
    })
  }),
  describe('when error prop is true', () => {
    it('renders correctly', () => {
      wrapper.setProps({
          error:true
          })
      expect(wrapper).toMatchSnapshot()
    })
  }),
  describe('when value prop is passed in', () => {
    it('renders correctly', () => {
      wrapper.setProps({
          value:`Example Text`
          })
      expect(wrapper).toMatchSnapshot()
    })
  }),
  describe('when handleOnChange is called', () => {
    it('calls the correct function and state is correct', () => {
      const e = {
        target: {
          value: 'test'
        }
      }
      const onChangeMock = jest.fn()
      wrapper.setProps({
          onChange:onChangeMock
          })
      expect(wrapper.instance().handleOnChange(e)).toEqual(undefined)
      expect(wrapper.state().value).toEqual('test')
      expect(onChangeMock).toHaveBeenCalledTimes(1)
    })
  }),
  describe('when handleOnBlur is called', () => {
    it('calls the correct function', () => {
      const onBlurMock = jest.fn()
      wrapper.setProps({
          onBlur:onBlurMock
          })
      expect(wrapper.instance().handleOnBlur()).toEqual(undefined)
      expect(onBlurMock).toHaveBeenCalledTimes(1)
    })
  })
})


//checkbox testing

describe('checkbox', () => {
  it('renders correctly', () => {
      wrapper.setProps({
        type:'checkbox'
        idForLabel:`exampleID`
      })
      expect(wrapper).toMatchSnapshot()
    }),
    describe('when handleOnChange is called', () => {
      it('calls the correct function and state is correct', () => {
        const e = {
          target: {
            value: 'test'
          }
        }
        const onChangeMock = jest.fn()
        wrapper.setProps({
          type:'checkbox',
          idForLabel:`exampleID`,
          onChange:onChangeMock
        })
        expect(wrapper.instance().handleOnChange(e)).toEqual(undefined)
        expect(wrapper.state().value).toEqual('test')
        expect(onChangeMock).toHaveBeenCalledTimes(1)
      })
    }),
    describe('when handleOnBlur is called', () => {
      it('calls the correct function', () => {
        const onBlurMock = jest.fn()
        wrapper.setProps({
          type:'checkbox',
          idForLabel:`exampleID`,
          onBlur:onBlurMock
        })
        expect(wrapper.instance().handleOnBlur()).toEqual(undefined)
        expect(onBlurMock).toHaveBeenCalledTimes(1)
      })
    })
})


//Radio testing

describe('radio', () => {
  it('renders correctly', () => {
      wrapper.setProps({
        type:'radio'
        idForLabel:`exampleID`
      })
      expect(wrapper).toMatchSnapshot()
    }),
    describe('when handleOnChange is called', () => {
      it('calls the correct function and state is correct', () => {
        const e = {
          target: {
            value: 'test'
          }
        }
        const onChangeMock = jest.fn()
        wrapper.setProps({
          type:'radio'
          idForLabel:`exampleID`,
          onChange:onChangeMock
        })
        expect(wrapper.instance().handleOnChange(e)).toEqual(undefined)
        expect(wrapper.state().value).toEqual('test')
        expect(onChangeMock).toHaveBeenCalledTimes(1)
      })
    }),
    describe('when handleOnBlur is called', () => {
      it('calls the correct function', () => {
        const onBlurMock = jest.fn()
        wrapper.setProps({
            type:'radio',
            idForLabel:`exampleID`,
            onBlur:onBlurMock
          })
        expect(wrapper.instance().handleOnBlur()).toEqual(undefined)
        expect(onBlurMock).toHaveBeenCalledTimes(1)
      })
    })

})
