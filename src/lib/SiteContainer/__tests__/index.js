import React from 'react'

import { shallow } from 'enzyme'
import SiteContainer from '..'

describe('SiteContainer', () => {
  //define default props
  let props = {}

  //create a shallow wrapper than can be reused
  let wrapper

  //initialize the components
  beforeEach(() => {
    wrapper = shallow(<SiteContainer {...props}/>)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})