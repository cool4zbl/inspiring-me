import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, size, font } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
  font-family: ${font('apple')};
  overflow: hidden;
  @media screen and (max-width: 640px) {
  }
`

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`

const Content = styled.section.attrs({
})`
  width: 100%;
  min-height: 70vh;
  box-sizing: border-box;
  margin: 1rem auto;
  max-width: ${size('maxWidth')};
  background-color: ${palette('white', 1)};
  /* more gorgeous pics using w/h proportion */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-image: ${props => `url(${props.bgImgUrl})`};

  @media screen and (max-width: 640px) {
    max-width: ${size('maxMWidth')};
    margin: 8vh auto 0;
    padding: 0;
  }
`

const Footer = styled.footer`
  margin-top: auto;
`

const PageTemplate = ({ header, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Content {...props}>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
}

export default PageTemplate
