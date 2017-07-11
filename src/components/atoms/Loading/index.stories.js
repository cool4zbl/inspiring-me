import React from 'react'
import { storiesOf } from '@storybook/react'
import loading from '.'

storiesOf('loading', module)
  .add('default', () => (
    <loading width={200} />
  ))
