import React from 'react'
import { storiesOf } from '@storybook/react'
import { QuoteWrapper } from 'components'

storiesOf('QuoteWrapper', module)
  .add('default', () => (
    <QuoteWrapper>Hello</QuoteWrapper>
  ))
  .add('reverse', () => (
    <QuoteWrapper reverse>Hello</QuoteWrapper>
  ))
