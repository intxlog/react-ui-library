import React from 'react'
import { storiesOf } from '@storybook/react';
import Button from './'

const containerStyles = {
  display: `grid`,
  gridTemplateColumns: `140px 140px 140px 140px 140px 140px`,
  gridRowGap: `10px`,
  justifyItems: `center`,
  alignItems: `end`
}

storiesOf('Button', module)
.add('Buttons', () => (
  <div style={containerStyles}>
    <Button 
      text={`Primary`}
    />
    <Button 
      text={`Large`}
      size={`large`}
    />
    <Button 
      text={`Small`}
      size={`small`}
    />
    <Button 
      text={`disabled`}
      disabled
    />
  </div>
))
.add('Links', () => (
  <div style={containerStyles}>
    <Button 
      text={`Link`}
      type={`link`}
      elementType={`link`}
      linkTo={`/`}
    />
  </div>
))
.add('Plain Buttons', () => (
  <div style={containerStyles}>
    <Button 
      text={`Primary`}
      type={`plain`}
    />
    <Button 
      text={`disabled`}
      disabled
      type={`plain`}
    />
  </div>
))
.add('Links (Styled as Buttons)', () => (
  <div style={containerStyles}>
    <Button 
      text={`Primary`}
      elementType={`link`}
      linkTo={`/`}
    />
    <Button 
      text={`Large`}
      size={`large`}
      elementType={`link`}
      linkTo={`/`}
    />
    <Button 
      text={`Small`}
      size={`small`}
      elementType={`link`}
      linkTo={`/`}
    />
    <Button 
      text={`Plain`}
      type={`plain`}
      elementType={`link`}
      linkTo={`/`}
    />
  </div>
))
.add('Button (Styled as Link)', () => (
  <div style={containerStyles}>
    <Button 
      text={`Primary`}
      type={`link`}
    />
  </div>
))