import React from 'react'

import { shallow } from 'enzyme'
import Modal from '..'

describe('Modal', () => {
  it('renders correctly', () => {
    const wrapper = shallow( <Modal/> )
    expect(wrapper).toMatchSnapshot()
  }),
  describe('when isOpen is true', () => {
    it('renders correctly', () => {
      const wrapper = shallow(
        <Modal
          isOpen={true}
        />
      )
      expect(wrapper).toMatchSnapshot()
    }),
    describe('when text is passed in', () => {
      it('renders correctly', () => {
        const wrapper = shallow(
          <Modal
            isOpen={true}
            text={`This is custom text`}
          />
        )
        expect(wrapper).toMatchSnapshot()
      })
    }),
    describe('when text is passed in', () => {
      it('renders correctly', () => {
        const wrapper = shallow(
          <Modal
            isOpen={true}
            buttonText={`Custom Text`}
          />
        )
        expect(wrapper).toMatchSnapshot()
      })
    }),
    describe('when type is warning', () => {
      it('renders correctly', () => {
        const wrapper = shallow(
          <Modal
            isOpen={true}
            type={'warning'}
          />
        )
        expect(wrapper).toMatchSnapshot()
      })
    }),
    describe('when type is error', () => {
      it('renders correctly', () => {
        const wrapper = shallow(
          <Modal
            isOpen={true}
            type={'error'}
          />
        )
        expect(wrapper).toMatchSnapshot()
      })
    }),
    describe('when custom content is passed in', () => {
      it('renders correctly', () => {
        const wrapper = shallow(
          <Modal
            isOpen={true}
            customContent={
              <div>Here is some custom content</div>
            }
          />
        )
        expect(wrapper).toMatchSnapshot()
      })
    })
  })
})