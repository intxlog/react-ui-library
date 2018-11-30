
import { configure, addDecorator } from '@storybook/react'
import React from 'react'
import './styles/base.module.scss'

const defaultWrapperStyles = {
  padding: '10px',
  backgroundColor: '#b3bbcc',
  height: '100vh'
}

const req = require.context('../src', true, /\_story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

//wrap all stories in a presentational wrapper
addDecorator(story => (
  <div style={defaultWrapperStyles}>
    {story()}
  </div>
))

configure(loadStories, module)
