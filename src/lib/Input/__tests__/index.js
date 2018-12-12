import React from 'react'

import {  shallow } from 'enzyme'
import Input from '..'

describe('Input', () => {
  it('renders correctly', () => {
      const wrapper = shallow( < Input / > )
      expect(wrapper).toMatchSnapshot()
    }),
    describe('when password prop is true', () => {
      it('renders correctly', () => {
        const wrapper = shallow( <
          Input password = {
            true
          }
          />
        )
        expect(wrapper).toMatchSnapshot()
      })
    }),
    describe('when idForLabel prop is passed in', () => {
      it('renders correctly', () => {
        const wrapper = shallow( <
          Input idForLabel = {
            `exampleID`
          }
          />
        )
        expect(wrapper).toMatchSnapshot()
      })
    }),
    describe('when placeholder prop is passed in', () => {
      it('renders correctly', () => {
        const wrapper = shallow( <
          Input placeholder = {
            `Example Text`
          }
          />
        )
        expect(wrapper).toMatchSnapshot()
      })
    }),
    describe('when infoText prop is passed in', () => {
      it('renders correctly', () => {
        const wrapper = shallow( <
          Input infoText = {
            `Example Text`
          }
          />
        )
        expect(wrapper).toMatchSnapshot()
      })
    }),
    describe('when error prop is true', () => {
      it('renders correctly', () => {
        const wrapper = shallow( <
          Input error = {
            true
          }
          />
        )
        expect(wrapper).toMatchSnapshot()
      })
    }),
    describe('when value prop is passed in', () => {
      it('renders correctly', () => {
        const wrapper = shallow( <
          Input value = {
            `Example Text`
          }
          />
        )
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
        const wrapper = shallow( <
          Input onChange = {
            onChangeMock
          }
          />
        )
        expect(wrapper.instance().handleOnChange(e)).toEqual(undefined)
        expect(wrapper.state().value).toEqual('test')
        expect(onChangeMock).toHaveBeenCalledTimes(1)
      })
    }),
    describe('when handleOnBlur is called', () => {
      it('calls the correct function', () => {
        const onBlurMock = jest.fn()
        const wrapper = shallow( <
          Input onBlur = {
            onBlurMock
          }
          />
        )
        expect(wrapper.instance().handleOnBlur()).toEqual(undefined)
        expect(onBlurMock).toHaveBeenCalledTimes(1)
      })
    })
})


//checkbox testing

describe('checkbox', () => {
  it('renders correctly', () => {
      const wrapper = shallow( <
        Input type = 'checkbox'
        idForLabel = {
          `exampleID`
        }
        />
      )
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
        const wrapper = shallow( <
          Input type = 'checkbox'
          idForLabel = {
            `exampleID`
          }
          onChange = {
            onChangeMock
          }
          />
        )
        expect(wrapper.instance().handleOnChange(e)).toEqual(undefined)
        expect(wrapper.state().value).toEqual('test')
        expect(onChangeMock).toHaveBeenCalledTimes(1)
      })
    }),
    describe('when handleOnBlur is called', () => {
      it('calls the correct function', () => {
        const onBlurMock = jest.fn()
        const wrapper = shallow( <
          Input type = 'checkbox'
          idForLabel = {
            `exampleID`
          }
          onBlur = {
            onBlurMock
          }
          />
        )
        expect(wrapper.instance().handleOnBlur()).toEqual(undefined)
        expect(onBlurMock).toHaveBeenCalledTimes(1)
      })
    })
})


//Radio testing

describe('radio', () => {
  it('renders correctly', () => {
      const wrapper = shallow( <
        Input type = 'radio'
        idForLabel = {
          `exampleID`
        }
        />
      )
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
        const wrapper = shallow( <
          Input type = 'radio'
          idForLabel = {
            `exampleID`
          }
          onChange = {
            onChangeMock
          }
          />
        )
        expect(wrapper.instance().handleOnChange(e)).toEqual(undefined)
        expect(wrapper.state().value).toEqual('test')
        expect(onChangeMock).toHaveBeenCalledTimes(1)
      })
    }),
    describe('when handleOnBlur is called', () => {
      it('calls the correct function', () => {
        const onBlurMock = jest.fn()
        const wrapper = shallow( <
          Input type = 'radio'
          idForLabel = {
            `exampleID`
          }
          onBlur = {
            onBlurMock
          }
          />
        )
        expect(wrapper.instance().handleOnBlur()).toEqual(undefined)
        expect(onBlurMock).toHaveBeenCalledTimes(1)
      })
    })

})
