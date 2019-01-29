import React from 'react'
import { storiesOf } from '@storybook/react'
import RadioGroup from './'
import RadioButton from './../RadioButton'

storiesOf('RadioGroup', module)
.add('default', () => (
  <RadioGroup
    name={`example`}
    disabled={false}
    formSubmitted={false}
    // defaultValue={2}
    required
  >
    <RadioButton
      labelText={`Option 1`}
      value={1}
    ></RadioButton>
    <RadioButton
      labelText={`Option 2`}
      value={2}
    ></RadioButton>
  </RadioGroup>
))
.add('required', () => (
  <RadioGroup
    name={`example5`}
    required={true}
    formSubmitted={false}
    isValid={(bool) => {console.log(bool)}}
  >
    <RadioButton
      labelText={`Option 1`}
      value={1}
    ></RadioButton>
    <RadioButton
      labelText={`Option 2`}
      value={2}
    ></RadioButton>
  </RadioGroup>
))
.add('disabled', () => (
  <RadioGroup
    name={`example2`}
    disabled
  >
    <RadioButton
      labelText={`Option 1`}
      value={1}
    ></RadioButton>
    <RadioButton
      labelText={`Option 2`}
      value={2}
    ></RadioButton>
  </RadioGroup>
))
.add('horizontal layout', () => (
  <RadioGroup
    name={`example3`}
    direction={`horizontal`}
  >
    <RadioButton
      labelText={`Option 1`}
      value={1}
    ></RadioButton>
    <RadioButton
      labelText={`Option 2`}
      value={2}
    ></RadioButton>
  </RadioGroup>
))
.add('error', () => (
  <RadioGroup
    name={`example4`}
    error={true}
  >
    <RadioButton
      labelText={`Option 1`}
      value={1}
    ></RadioButton>
    <RadioButton
      labelText={`Option 2`}
      value={2}
    ></RadioButton>
  </RadioGroup>
))
.add('default checked', () => (
  <RadioGroup
    name={`example4`}
    defaultValue={2}
  >
    <RadioButton
      labelText={`Option 1`}
      value={1}
      ></RadioButton>
    <RadioButton
      labelText={`Option 2`}
      value={2}
    ></RadioButton>
  </RadioGroup>
))