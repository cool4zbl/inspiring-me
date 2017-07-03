import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette, reverse } from 'styled-theme'

const DaysWrapper = styled.div.attrs({
})`
  font-family: ${font('apple')};
  color: ${palette('white', 0)};
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 2px solid ${palette('white', 0)};
  flex: ${ props => props.flex };
`
const Span = styled.span`
  flex: 1;
  max-width: 50%;
`

const INIT_COPY = 'Yeah, WE ARE TOGETHER TODAY '

const DaysBadge = ({ children, ...props }) => {

  return (
    <DaysWrapper {...props}>
      <Span>{ props.days }</Span>
      <Span>DAYS</Span>
      <Span>TOGETHER</Span>
      {children}
    </DaysWrapper>
  )
}

DaysBadge.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default DaysBadge
