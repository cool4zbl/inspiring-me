import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import { font, palette, size } from 'styled-theme'

const Wrapper = styled.section`
  width: 100vw;
  flex: ${prop('flex', 1.8)};
  overflow-y: scroll;
  background: ${palette('white', 0)};
  transform: translateY(50%);
  transition: all .3s;
  font-family: ${font('quote')};
  &.opened {
    flex: 1.6;
    transform: translateY(0);
    overflow-y: auto;
  }
`

const QuoteBox = styled.div`
  padding: 1rem 1.5rem .5rem;
  position: relative;
  display: block;
  font-size: 1.4rem;
  line-height: 2.1rem;
  text-align: center;
  color: ${palette('grayscale', 1)};
`

const UpperQuoteBox = QuoteBox.extend`
  text-transform: uppercase;
  margin-top: 1rem;
  padding: 1em .5em 1em;
  font-size: 1rem;
  line-height: 1.6rem;
  border-top: .2em solid transparent;
  border-image: 100% 0 0
    linear-gradient(
      90deg,
      transparent 48vw,
      ${palette('grayscale', 2, true)} 48vw,
      ${palette('grayscale', 2, true)} 52vw,
      transparent 0
    );
`

const QuoteWrapper = ({ children, quote, ...props }) => {
  return (
    <Wrapper {...props}>
      <QuoteBox>
        {quote.quote}
      </QuoteBox>
      {quote.author
        ? <UpperQuoteBox>
            {quote.author}
          </UpperQuoteBox>
        : ''}
      {children}
    </Wrapper>
  )
}

QuoteWrapper.propTypes = {
  reverse: PropTypes.bool,
  quote: PropTypes.object,
  children: PropTypes.any,
}

export default QuoteWrapper
