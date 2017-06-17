import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  background-color: ${palette('danger', 1)};
  color: ${palette('white', 1)};
  padding: 1rem;
  text-align: center;
`

const Header = (props) => {
  return (
    <Wrapper {...props}>
      Daily 日.常
    </Wrapper>
  )
}

Header.propTypes = {
  reverse: PropTypes.bool,
}

export default Header
