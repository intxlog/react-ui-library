import React from 'react'

import { shallow } from 'enzyme'
import LoadingGif from '..'

describe('LoadingGif', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<LoadingGif/>)
    expect(wrapper).toMatchSnapshot()
  })
})