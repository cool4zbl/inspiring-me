import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, size, font } from 'styled-theme'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: ${size('maxMWidth')};
  min-height: 100vh;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-family: ${font('apple')};
  overflow: hidden;
`

const Header = styled.header`
  max-width: ${size('maxMWidth')};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`

const Content = styled.section`
  width: 100%;
  min-height: 70vh;
  box-sizing: border-box;
  margin: 8vh auto 0;
  padding: 0;
  max-width: ${size('maxMWidth')};
  background-color: ${palette('white', 1)};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-image: ${props => `url(${props.bgImgUrl})`};
`

const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
`

const PageTemplate = ({ header, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>
        {header}
      </Header>
      <Content {...props}>
        {children}
      </Content>
      <Footer>
        {footer}
      </Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
}

export default PageTemplate
