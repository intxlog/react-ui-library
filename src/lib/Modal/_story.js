import React from 'react'
import { storiesOf } from '@storybook/react';
import Modal from './'

storiesOf('Modal', module)
.add('closed', () => (
  <Modal></Modal>
))
.add('default', () => (
  <Modal
    isOpen={true}
  ></Modal>
))
.add('default with custom text', () => (
  <Modal
    isOpen={true}
    text={`This is custom text`}
  ></Modal>
))
.add('default with custom button text', () => (
  <Modal
    isOpen={true}
    buttonText={`Custom Text`}
  ></Modal>
))
.add('warning', () => (
  <Modal
    isOpen={true}
    type={`warning`}
  ></Modal>
))
.add('error', () => (
  <Modal
    isOpen={true}
    type={`error`}
  ></Modal>
))
.add('customContent', () => (
  <Modal
    isOpen={true}
    customContent={
      <div>Here is some custom content</div>
    }
  ></Modal>
))
