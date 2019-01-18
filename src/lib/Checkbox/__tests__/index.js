import React from 'react'
import { shallow } from 'enzyme'
import Checkbox from '..'

describe('Checkbox', () => {
  let props = {
    labelText: `example`
  }
  
  //create a shallow wrapper that can be reused
  let wrapper
  //initialize the components
  beforeEach(() => {
    wrapper = shallow(<Checkbox {...props}/>)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})