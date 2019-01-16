import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './../Input'

storiesOf('Radio Button', module)
.add('default', () => (
  <Input
    type='radio'
    name={'test'}
    value={`option1`}
    idForLabel={`option1`}
    labelText={'Option 1'}
  ></Input>
))
.add('defaultChecked', () => (
  <Input
    type='radio'
    name={'test'}
    value={`option1`}
    idForLabel={`option1`}
    labelText={'Option 1'}
    defaultChecked
  ></Input>
))
.add('disabled', () => (
  <Input
    type='radio'
    name={'test'}
    value={`option1`}
    idForLabel={`option1`}
    labelText={'Option 1'}
    disabled
  ></Input>
))