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
  <Input disabled></Input>
))
.add('default with defaultValue (disabled)', () => (
  <Input disabled defaultValue={`Example Text`}></Input>
))
.add('default with infoText', () => (
  <Input infoText={`Example info text`}></Input>
))
.add('default with infoText and error', () => (
  <Input infoText={`Example info text`} error={true}></Input>
))
.add('email', () => (
  <Input
    type='email'
  ></Input>
))
.add('email with placeholder', () => (
  <Input
    type='email'
    placeholder={`Example Placeholder`}
  ></Input>
))
.add('email (required)', () => (
  <Input
    type='email'
    required
  ></Input>
))
.add('email (disabled)', () => (
  <Input disabled
    type='email'
  ></Input>
))
.add('email with defaultValue (disabled)', () => (
  <Input disabled
    type='email'
    defaultValue={'test@test.com'}
  ></Input>
))
.add('email with infoText', () => (
  <Input 
    type='email'
    infoText={`Enter email`}
    ></Input>
))
.add('email with infoText and error', () => (
  <Input 
    type='email'
    infoText={`email is incorrect`} 
    error={true}
    ></Input>
))
.add('email isValid event fires', () => (
  <Input
    type='email'
    required={true}
    defaultValue={'test@test.com'}
    isValid={(bool) => {console.log(bool)}}
  ></Input>
))
.add('password', () => (
  <Input
    type='password'
  ></Input>
))
.add('password with placeholder', () => (
  <Input
    type='password'
    placeholder={`Example Placeholder`}
  ></Input>
))
.add('password (required)', () => (
  <Input
    type='password'
    required
  ></Input>
))
.add('password (Validation) Must Use One CAPITAL letter', () => (
  <Input
    type='password'
    placeholder={`One CAPITAL Letter to Pass`}
    verify   
  ></Input>
))
.add('password (disabled)', () => (
  <Input disabled
    type='password'
  ></Input>
))
.add('password with defaultValue (disabled)', () => (
  <Input disabled
    type='password'
    defaultValue={'***********'}
  ></Input>
))
.add('password with infoText', () => (
  <Input 
    type='password'
    infoText={`Enter password`}
    ></Input>
))
.add('password with infoText and error', () => (
  <Input 
    type='password'
    infoText={`Password or Username is incorrect`} 
    error={true}
    ></Input>
))
.add('password isValid event fires', () =>(
  <Input
    type='password'
    required={true}
    defaultValue={'password123'}
    isValid={(bool) => {console.log(bool)}}
    ></Input>
))

storiesOf('TextArea', module)
.add('default', () => (
  <Input type={`textArea`}></Input>
))
.add('default with placeholder', () => (
  <Input type={`textArea`} placeholder={`Example of a placeholder`}></Input>
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
.add('default with defaultValue', () => (
  <Input type={`textArea`} defaultValue={`Example of a default value`}></Input>
))
.add('default with infoText', () => (
  <Input 
    type='textArea'
    infoText={`Enter textArea`}
  ></Input>
))
.add('default with infoText and error', () => (
  <Input 
    type='textArea'
    infoText={`textArea is incorrect`} 
    error={true}
  ></Input>
))
.add('default isValid event fires', () =>(
  <Input
    type='textArea'
    required={true}
    defaultValue={'Default textArea value'}
    isValid={(bool) => {console.log(bool)}}
  ></Input>
))

storiesOf('Input Select', module)
.add('default', () => (
  <Input
    type='select'
  >
  <option value="default">Choose an option</option>
  </Input>
))
.add('default (disabled)', () => (
  <Input
    type='select'
    disabled
  >
  </Input>
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
.add('default with infoText', () => (
  <Input 
    type='select'
    infoText={`Default info text`}
    >
    <option value="default" disabled>Choose an option</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Input>
))
.add('default with infoText and error', () => (
  <Input 
    type='select'
    infoText={`option is incorrect`}  
    error={true}    
    >
    <option value="default" disabled>Choose an option</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Input>
))
.add('default isValid event fires', () =>(
  <Input
    type='select'
    required={true}
    defaultValue={'Default default value'}
    isValid={(bool) => {console.log(bool)}}
    >
    <option value="default" disabled>Choose an option</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Input>
))


storiesOf('Input Radio', module)
.add('default', () => (
  <>
    <Input
      type='radio'
      name={'test'}
      value={`option1`}
      idForLabel={`option1`}
      labelText={'Option 1'}
    ></Input>
    <Input
      type='radio'
      name={'test'}
      value={`option2`}
      idForLabel={`option2`}
      labelText={'Option 2'}
    ></Input>
  </>
))
.add('defaultChecked', () => (
  <>
    <Input
      type='radio'
      name={'test'}
      value={`option1`}
      idForLabel={`option1`}
      labelText={'Option 1'}
      defaultChecked
    ></Input>
    <Input
      type='radio'
      name={'test'}
      value={`option2`}
      idForLabel={`option2`}
      labelText={'Option 2'}
    ></Input>
  </>
))
.add('default (disabled)', () => (
  <>
    <Input
      type='radio'
      name={'test'}
      value={`option1`}
      idForLabel={`option1`}
      labelText={'Option 1'}
      disabled
    ></Input>
    <Input
      type='radio'
      name={'test'}
      value={`option2`}
      idForLabel={`option2`}
      labelText={'Option 2'}
      disabled
    ></Input>
  </>
))
.add('default (disabled) with defaultChecked', () => (
  <>
    <Input
      type='radio'
      name={'test'}
      value={`option1`}
      idForLabel={`option1`}
      labelText={'Option 1'}
      defaultChecked
      disabled
    ></Input>
    <Input
      type='radio'
      name={'test'}
      value={`option2`}
      idForLabel={`option2`}
      labelText={'Option 2'}
      disabled
    ></Input>
  </>
))
.add('default with infoText', () => (
  <>
    <Input
      type='radio'
      name={'test'}
      value={`option1`}
      idForLabel={`radio1`}
      labelText={'Option 1'}
      infoText={`Option 1 radio`} 
      defaultChecked
    ></Input>
    <Input
      type='radio'
      name={'test'}
      value={`option2`}
      idForLabel={`radio2`}
      labelText={'Option 2'}
      infoText={`Option 2 radio`} 
    ></Input>
  </>
))
.add('default with infoText and error', () => (
  <>
    <Input
      type='radio'
      name={'test'}
      value={`option1`}
      idForLabel={`radio1`}
      labelText={'Option 1'}
      infoText={`Option 1 is incorrect`} 
      error={true}
      defaultChecked
    ></Input>
    <Input
      type='radio'
      name={'test'}
      value={`option2`}
      idForLabel={`radio2`}
      labelText={'Option 2'}
      infoText={`Option 2 is incorrect`} 
      error={true}
    ></Input>
  </>
))

storiesOf('Input Checkbox', module)
.add('default', () => (
  <>
    <Input
      type='checkbox'
      value={`Checkbox`}
      idForLabel={`checkbox1`}
      labelText={'1st Awesome Checkbox'}
    ></Input>
    <Input
      type='checkbox' 
      value={`Checkbox`}
      idForLabel={`checkbox2`}
      labelText={'2nd Awesome Checkbox'}
    ></Input>
  </>
))
.add('defaultChecked', () => (
  <>
    <Input
      type='checkbox'
      value={`Checkbox`}
      idForLabel={`checkbox1`}
      labelText={'1st Awesome Checkbox'}
      defaultChecked
    ></Input>
    <Input
      type='checkbox' 
      value={`Checkbox`}
      idForLabel={`checkbox2`}
      labelText={'2nd Awesome Checkbox'}
    ></Input>
  </>
))
.add('default (disabled)', () => (
  <>
    <Input
      type='checkbox'
      value={`Checkbox`}
      idForLabel={`checkbox1`}
      labelText={'1st Awesome Checkbox'}
      disabled
    ></Input>
    <Input
      type='checkbox' 
      value={`Checkbox`}
      idForLabel={`checkbox2`}
      labelText={'2nd Awesome Checkbox'}
      disabled
    ></Input>
  </>
))
.add('defaultChecked (disabled)', () => (
  <>
    <Input
      type='checkbox'
      value={`Checkbox`}
      idForLabel={`checkbox1`}
      labelText={'1st Awesome Checkbox'}
      defaultChecked
      disabled
    ></Input>
    <Input
      type='checkbox' 
      value={`Checkbox`}
      idForLabel={`checkbox2`}
      labelText={'2nd Awesome Checkbox'}
      disabled
    ></Input>
  </>
))
.add('default with infoText', () => (
  <>
    <Input
      type='checkbox'
      value={`Checkbox`}
      idForLabel={`checkbox1`}
      labelText={'1st Awesome Checkbox'}
      infoText={`Checkbox 1`} 
    ></Input>
    <Input
      type='checkbox' 
      value={`Checkbox`}
      idForLabel={`checkbox2`}
      labelText={'2nd Awesome Checkbox'}
      infoText={`Checkbox 2`} 
    ></Input>
  </>
))
.add('default with infoText and error ', () => (
  <>
    <Input
      type='checkbox'
      value={`Checkbox`}
      idForLabel={`checkbox1`}
      labelText={'1st Awesome Checkbox'}
      infoText={`Option 1 is incorrect`} 
      error={true}
    ></Input>
    <Input
      type='checkbox' 
      value={`Checkbox`}
      idForLabel={`checkbox2`}
      labelText={'2nd Awesome Checkbox'}
      infoText={`Option 2 is incorrect`} 
      error={true}
    ></Input>
  </>
))