
import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import './styles/base.module.scss'

const defaultWrapperStyles = {
  padding: '20px',
}

const req = require.context('../src', true, /\_story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(
  withInfo({
    inline: true
  })
)

// wrap all stories in a presentational wrapper
addDecorator(story => (
  <div style={defaultWrapperStyles}>
    {story()}
  </div>
))

configure(loadStories, module)
