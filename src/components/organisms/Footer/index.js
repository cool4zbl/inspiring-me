import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { Paragraph, Link, Icon } from 'components'

const Wrapper = styled.div`
  z-index: 1001;
  background-color: ${palette('white', 2)};
  padding: .4rem;
`

const Credits = styled(Paragraph)`
  vertical-align: middle;
  text-align: center;
  margin: 0;
  color: ${palette('grayscale', 0)};
`

const IconHeart = styled(Icon)`
  vertical-align: top;
`

const Footer = props => {
  return (
    <Wrapper {...props}>
      <Credits>
        Made with <IconHeart icon="heart" /> by{' '}
        <Link href="http://zhangbinliu.me">ZBL</Link>
      </Credits>
    </Wrapper>
  )
}

Footer.propTypes = {
  reverse: PropTypes.bool,
}

export default Footer
