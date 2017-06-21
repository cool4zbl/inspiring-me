import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, size, font } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;
  font-family: ${font('apple')};
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`

const Content = styled.section`
  background-color: ${palette('white', 1)};
  width: 100%;
  min-height: 70vh;
  box-sizing: border-box;
  padding: .25rem;
  margin: 1rem auto;
  max-width: ${size('maxWidth')};
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg');
  background-positon: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;

  @media screen and (max-width: 640px) {
    margin: 0 auto;
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
      <Content>{children}</Content>
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
