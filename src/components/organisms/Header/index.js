import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { font, palette, size } from 'styled-theme'
import { Block, Icon, Heading } from 'components'

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

const heartbeat = keyframes`
  from {
    transform: scale(.5);
  }
  23%, 77% {
    transform: scale(.8);
  }
  54% {
    transform: scale(1.2);
  }
  to {
    transform: scale(.5);
  }
`

const IconHeart = styled(Icon)`
  margin-left: .5em;
  vertical-align: middle;
  animation: ${heartbeat} 1.5s linear infinite;
`
const Header = props => {
  return (
    <Wrapper {...props}>
      <Span>
        Inspiring Me
        <IconHeart icon="heart" />
      </Span>
    </Wrapper>
  )
}

Header.propTypes = {
  reverse: PropTypes.bool,
}

export default Header
