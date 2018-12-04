import React from 'react'

import { shallow } from 'enzyme'
import TextInput from '..'

describe('TextInput', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TextInput/>)
    expect(wrapper).toMatchSnapshot()
  }),
  describe('when password prop is true', () =>{
    it('renders correctly', () => {
      const wrapper = shallow(
        <TextInput
          password={true}
        />
      )
      expect(wrapper).toMatchSnapshot()
    })
  }),
  describe('when idForLabel prop is passed in', () =>{
    it('renders correctly', () => {
      const wrapper = shallow(
        <TextInput
          idForLabel={`exampleID`}
        />
      )
      expect(wrapper).toMatchSnapshot()
    })
  }),
  describe('when placeholder prop is passed in', () =>{
    it('renders correctly', () => {
      const wrapper = shallow(
        <TextInput
          placeholder={`Example Text`}
        />
      )
      expect(wrapper).toMatchSnapshot()
    })
  }),
  describe('when infoText prop is passed in', () =>{
    it('renders correctly', () => {
      const wrapper = shallow(
        <TextInput
          infoText={`Example Text`}
        />
      )
      expect(wrapper).toMatchSnapshot()
    })
  }),
  describe('when error prop is true', () =>{
    it('renders correctly', () => {
      const wrapper = shallow(
        <TextInput
          error={true}
        />
      )
      expect(wrapper).toMatchSnapshot()
    })
  }),
  describe('when value prop is passed in', () =>{
    it('renders correctly', () => {
      const wrapper = shallow(
        <TextInput
          value={`Example Text`}
        />
      )
      expect(wrapper).toMatchSnapshot()
    })
  }),
  // describe('when user changes the value', () => {
  //   it('calls the correct function', () => {
  //     const onChangeMock = jest.fn()
  //     const wrapper = shallow(
  //       <TextInput
  //         onChange={onChangeMock}
  //       />
  //     )
  //     const element = wrapper.find('.element')
  //     element.simulate('change', {
  //       target: { value: 'hello' }
  //     })
  //     expect(onChangeMock).toHaveBeenCalledTimes(1)
  //     expect(onChangeMock).toHaveBeenCalledWith('hello')
  //   })
  // }),
  // describe('when user fires the blur event', () => {
  //   it('calls the correct function', () => {
  //     const onBlurMock = jest.fn()
  //     const wrapper = shallow(
  //       <TextInput
  //         onBlur={onBlurMock}
  //       />
  //     )
  //     const element = wrapper.find('.element')
  //     element.simulate('blur')
  //     expect(onBlurMock).toHaveBeenCalledTimes(1)
  //     expect(onBlurMock).toHaveBeenCalledWith('')
  //   })
  // }),
  describe('when handleOnChange is called', () => {
    it('calls the correct function and state is correct', () => {
      const e = { target: { value: 'test' } }
      const onChangeMock = jest.fn()
      const wrapper = shallow(
        <TextInput
          onChange={onChangeMock}
        />
      )
      expect(wrapper.instance().handleOnChange(e)).toEqual(undefined)
      expect(wrapper.state().value).toEqual('test')
      expect(onChangeMock).toHaveBeenCalledTimes(1)
    })
  })
  describe('when handleOnBlur is called', () => {
    it('calls the correct function', () => {
      const onBlurMock = jest.fn()
      const wrapper = shallow(
        <TextInput
          onBlur={onBlurMock}
        />
      )
      expect(wrapper.instance().handleOnBlur()).toEqual(undefined)
      expect(onBlurMock).toHaveBeenCalledTimes(1)
    })
  })
})