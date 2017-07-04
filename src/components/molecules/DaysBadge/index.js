import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import { font, palette, size } from 'styled-theme'
import {
  Block
} from 'components'

const DaysWrapper = styled.div.attrs({
})`
  max-width: max-content;
  flex: ${prop('flex', 3)};
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`
const InnerWrapper = styled(Block)`
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 4px solid ${palette('white', 0)};
`

const Span = styled.span`
  margin: .2em;
  flex: 1;
  color: ${ifProp('reverse', palette('white', 2), palette('white', 0))};
  background-color: ${ifProp('reverse', palette('grayscale', 3), 'transparent')};
  font-size: ${ifProp('featured', '2.8em' , '1em')};
  &:nth-child(3) {
    font-weight: 600;
  }
`

const INIT_COPY = 'Yeah, WE ARE TOGETHER TODAY '

const DaysBadge = ({ children, ...props }) => {

  return (
    <DaysWrapper {...props}>
      <InnerWrapper>
        <Span featured>{ props.days }</Span>
        <Span>DAYS</Span>
        <Span reverse>TOGETHER</Span>
        {children}
      </InnerWrapper>
    </DaysWrapper>
  )
}

DaysBadge.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default DaysBadge
