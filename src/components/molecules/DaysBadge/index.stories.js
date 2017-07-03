import React from 'react'
import { storiesOf } from '@storybook/react'
import { DaysBadge } from 'components'

storiesOf('DaysBadge', module)
  .add('default', () => (
    <DaysBadge>Hello</DaysBadge>
  ))
  .add('reverse', () => (
    <DaysBadge reverse>Hello</DaysBadge>
  ))
