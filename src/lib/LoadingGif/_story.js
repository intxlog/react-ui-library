import React from 'react'
import { storiesOf } from '@storybook/react';
import LoadingGif from './'

storiesOf('LoadingGif', module)
.add('default', () => (
  <LoadingGif></LoadingGif>
))