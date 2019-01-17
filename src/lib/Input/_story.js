import React from 'react'
import { storiesOf } from '@storybook/react';
import Input from './'

storiesOf('Input', module)
.add('default', () => (
  <Input></Input>
))
.add('default with placeholder', () => (
  <Input
    placeholder={`Example Placeholder`}
  ></Input>
))
.add('default (required)', () => (
  <Input
    required
  ></Input>
))
.add('default (disabled)', () => (
  <Input 
    disabled
  ></Input>
))
.add('default with defaultValue (disabled)', () => (
  <Input 
    disabled 
    defaultValue={`Example Text`}
  ></Input>
))
.add('email isValid event fires', () => (
  <Input
    type='email'
    required={true}
    defaultValue={'test@test.com'}
    disabled
    isValid={(bool) => {console.log(bool)}}
  ></Input>
))
.add('password', () => (
  <Input
    type='password'
  ></Input>
))
<<<<<<< HEAD
=======
.add('email (validation)', () => (
  <Input
    type='email'
  ></Input>
))
>>>>>>> develop
.add('zip (validation)', () => (
  <Input
    type='zip'
    required
  ></Input>
<<<<<<< HEAD
=======
 ))
.add('phone (validation)', () => (
  <Input
    type='phone'
    required
  ></Input>
))
.add('ein (validation) 9 digits', () => (
  <Input
    type='ein'
    required
  ></Input>
))
.add('ssn (validation)', () => (
  <Input
    type='ssn'
    required
  ></Input>
>>>>>>> develop
))

storiesOf('TextArea', module)
.add('default', () => (
  <Input 
    type={`textArea`}
  ></Input>
))
.add('default (required)', () => (
  <Input
    type={`textArea`}
    required
  ></Input>
))
.add('default (disabled)', () => (
  <Input type={`textArea`} disabled></Input>
))
.add('default with defaultValue (disabled)', () => (
  <Input 
    type={`textArea`} 
    disabled
    defaultValue={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin velit ac tellus posuere, vel rutrum dolor pellentesque. Duis dapibus sapien in mauris pretium volutpat. Vivamus id purus in erat pharetra ultrices eget sit amet orci. Ut ornare dolor sit amet rutrum euismod. Suspendisse potenti. Nunc sed urna quis augue dictum rhoncus. Vivamus vehicula sapien sed dolor gravida, at imperdiet mi aliquet. Curabitur venenatis gravida metus et tempor. Phasellus quis tortor lacinia, gravida magna sit amet, tincidunt odio. Donec nulla purus, interdum nec condimentum ut, rutrum quis arcu.`}
  ></Input>
))
.add('with placeholder', () => (
  <Input type={`textArea`} placeholder={`Example of a placeholder`}></Input>
))
.add('with defaultValue', () => (
  <Input type={`textArea`} defaultValue={`Example of a default value`}></Input>
))

storiesOf('Input Select', module)
.add('default', () => (
  <Input
    type='select'
  ></Input>
))
.add('default (disabled)', () => (
  <Input
    type='select'
    disabled
  ></Input>
))
.add('default with options (disabled)', () => (
  <Input
    type='select'
    defaultValue='default'
    disabled
  >
    <option value="default" disabled>Choose an option</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Input>
))
.add('with options', () => (
  <Input
    type='select'
    defaultValue='default'
  >
    <option value="default" disabled>Choose an option</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Input>
))

storiesOf('Input Checkbox', module)
.add('default', () => (
  <Input
    type='checkbox'
    value={`Checkbox`}
    idForLabel={`option1`}
    labelText={'Awesome Checkbox'}
  ></Input>
))
