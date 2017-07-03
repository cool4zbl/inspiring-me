import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import { font, palette, size } from 'styled-theme'

const Wrapper = styled.section`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  flex: ${prop('flex', 2)};
  padding: 0.5rem 0 0.5rem 1.5rem;
`
const QuoteBox = styled.section`
  position: relative;
  font-family: ${font('quote')};
  font-size: 1.2rem;
  line-height: 2rem;
  box-sizing: border-box;
  color: ${palette('grayscale', 1)};
  border-left: 5px solid ${palette('grayscale', 2, true)};
  margin: 1rem 0;
`

const QuoteWrapper = ({ children, ...props }) => {

  return (
    <Wrapper {...props}>
      <QuoteBox>
        { props.quote} ! 🌝
      </QuoteBox>
      {children}
    </Wrapper>
  )
}

QuoteWrapper.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default QuoteWrapper
