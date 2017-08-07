import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette, size } from 'styled-theme'
import { Block, Heading, DayPickerWrapper } from 'components'

const Wrapper = styled(Block)`
  font-family: ${font('italic')};
  font-weight: 700;
  font-style: italic;
  background-color: ${palette('white', 1)};
  color: ${palette('danger', 1)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem 1rem;
  height: 8vh;
  text-align: center;
`

const Span = styled.span`flex: 1;`

const Header = props => {
  return (
    <Wrapper {...props}>
      <Span>Inspiring Me</Span>
    </Wrapper>
  )
}

Header.propTypes = {
  reverse: PropTypes.bool,
}

export default Header
