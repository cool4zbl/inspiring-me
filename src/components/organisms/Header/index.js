import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Block, Heading } from 'components'

const Wrapper = styled(Block)`
  font-family: ${font('primary')};
  font-weight: 700;
  font-style: italic;
  font-size: 1.2rem;
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
  const handleClick = props.handleIconClick
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
