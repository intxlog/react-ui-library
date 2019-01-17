import React from 'react'
import { shallow } from 'enzyme'
import RadioButton from '..'

describe('RadioButton', () => {
  let props = {
    labelText: `Example`
  }
  
  //create a shallow wrapper that can be reused
  let wrapper
  //initialize the components
  beforeEach(() => {
    wrapper = shallow(<RadioButton {...props}/>)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})