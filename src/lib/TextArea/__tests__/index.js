import React from 'react'
import { shallow } from 'enzyme'
import TextArea from '..'

describe('TextArea', () => {
  let props = {}
  
  //create a shallow wrapper that can be reused
  let wrapper
  //initialize the components
  beforeEach(() => {
    wrapper = shallow(<TextArea {...props}/>)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})