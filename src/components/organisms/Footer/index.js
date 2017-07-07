import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { Paragraph, Link } from 'components'

const Wrapper = styled.div`
  z-index: 1001;
  background-color: ${palette('white', 2)};
  padding: .8rem;
`

const Credits = styled(Paragraph)`
  vertical-align: center;
  text-align: center;
  margin: 0;
  color: ${palette('grayscale', 0)};
`

const Footer = (props) => {
  return (
    <Wrapper {...props}>
      <Credits>
        Made with ❤️   by  <Link href='http://zhangbinliu.me'>ZBL</Link>
      </Credits>
    </Wrapper>
  )
}

Footer.propTypes = {
  reverse: PropTypes.bool,
}

export default Footer
