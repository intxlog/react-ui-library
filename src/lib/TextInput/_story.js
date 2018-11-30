import React from 'react'
import { storiesOf } from '@storybook/react';
import TextInput from './'

storiesOf('TextInput', module)
.add('default', () => (
  <TextInput></TextInput>
))
.add('with placeholder', () => (
  <TextInput
    placeholder={'Example placeholder'}
  ></TextInput>
))
.add('with default value', () => (
  <TextInput
    value={'Example value'}
  ></TextInput>
))
.add('with error', () => (
  <TextInput
    error={true}
  ></TextInput>
))
.add('with error and infoText text', () => (
  <TextInput
    error={true}
    infoText={'Example text'}
  ></TextInput>
))
.add('with infoText text', () => (
  <TextInput
    infoText={'Example text'}
  ></TextInput>
))
.add('with password true and default value', () => (
  <TextInput
    password={true}
    value={'example'}
  ></TextInput>
))