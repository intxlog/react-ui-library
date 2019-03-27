import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import './styles/base.scss'

//import stories from the src folder
const req = require.context('../src', true, /\_story\.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

//add the info addon 
addDecorator(
  withInfo({
    inline: true
  })
)

configure(loadStories, module);
