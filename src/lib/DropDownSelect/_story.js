import React from 'react'
import { storiesOf } from '@storybook/react';
import DropDownSelect from './'

storiesOf('Select', module)
.add('default', () => (
  <DropDownSelect></DropDownSelect>
))