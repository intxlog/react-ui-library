import React from 'react'
import { shallow } from 'enzyme'
import TextInput from '..'

describe('TextInput', () => {
  let props = {}
  
  //create a shallow wrapper that can be reused
  let wrapper
  //initialize the components
  beforeEach(() => {
    wrapper = shallow(<TextInput {...props}/>)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})