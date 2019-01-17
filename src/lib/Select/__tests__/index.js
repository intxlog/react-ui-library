import React from 'react'
import { shallow } from 'enzyme'
import Select from '..'

describe('Select', () => {
  let props = {}
  
  //create a shallow wrapper that can be reused
  let wrapper
  //initialize the components
  beforeEach(() => {
    wrapper = shallow(<Select {...props}/>)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})