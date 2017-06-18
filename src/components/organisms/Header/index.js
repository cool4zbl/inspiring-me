import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette, size } from 'styled-theme'
import { 
  Block, Heading, 
  DayPickerWrapper
} from 'components'

const Wrapper = styled(Block)`
  background-color: ${palette('danger', 1)};
  color: ${palette('white', 1)};
  display: flex;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  @media screen and (max-width: 640px) {
    padding: 0.8rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size('maxWidth')};
  > :not(:first-child) {
    margin-left: 1rem;
  }
`

const Span = styled.span`
  flex: 1;
`

const Header = (props) => {
  return (
    <Wrapper {...props}>
      <InnerWrapper>
        <Span>日.常</Span>
        <Span>Day</Span>
        <Span>Icon</Span>
      </InnerWrapper>
    </Wrapper>
  )
}

Header.propTypes = {
  reverse: PropTypes.bool,
}

export default Header
