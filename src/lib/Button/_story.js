import React from 'react'
import { storiesOf } from '@storybook/react';
import Button from './'

const containerStyles = {
  display: `grid`,
  gridTemplateColumns: `140px 140px 140px 140px`,
  gridRowGap: `10px`,
  justifyItems: `center`,
  alignItems: `end`
}

storiesOf('Button', module)
.add('all Buttons', () => (
  <div style={containerStyles}>
    <Button 
      text={`Primary`}
    />
    <Button 
      text={`Large`}
      size={`large`}
    />
    <Button 
      text={`Medium`}
      size={`medium`}
    />
    <Button 
      text={`Small`}
      size={`small`}
    />
    <Button 
      text={`Plain Button`}
      type={`plain`}
    />
    <Button 
      text={`disabled`}
      disabled
    />
    <Button 
      text={`Link`}
      linkTo={`/`}
      type={`link`}
    />
  </div>
))