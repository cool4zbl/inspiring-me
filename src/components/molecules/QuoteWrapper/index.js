import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import { font, palette, size } from 'styled-theme'

const Wrapper = styled.section`
  width: 100vw;
  flex: ${prop('flex', 2)};
  max-height: 40%;
  background: ${palette('white', 0)};
`
const QuoteBox = styled.div`
  padding: 0.5rem 1.5rem;
  position: relative;
  display: block;
  font-family: ${font('quote')};
  font-size: 1.2rem;
  line-height: 2rem;
  text-align: center;
  box-sizing: border-box;
  color: ${palette('grayscale', 1)};
  margin: 1rem 0;
`
const UpperQuoteBox = QuoteBox.extend`
  text-transform: uppercase;
  padding-top: 1em;
  border-top: .2em solid transparent;
  border-image: 100% 0 0 linear-gradient(90deg, 
    transparent 48vw, 
    ${palette('grayscale', 2, true)} 48vw, 
    ${palette('grayscale', 2, true)} 52vw, 
    transparent 0);
`

const QuoteWrapper = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <QuoteBox>
        { props.quote.quote} 🌝
      </QuoteBox>
      <UpperQuoteBox>
        { props.quote.author}
      </UpperQuoteBox>
      {children}
    </Wrapper>
  )
}

QuoteWrapper.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default QuoteWrapper
