import React from 'react'
import { storiesOf } from '@storybook/react';
import Input from './Input'

storiesOf('Playground', module)
.add('Form Elements', () => (
  <>
    <Input
    ></Input>
    <Input
      type='select'
    >
      <option>
      Option 1
      </option>
      <option>
      Option 2
      </option>
      <option>
      Option 3
      </option>
    </Input>
    <Input
      type='textArea'
    ></Input>
  </>
))