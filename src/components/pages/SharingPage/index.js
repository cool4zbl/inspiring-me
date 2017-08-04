import React from 'react'
import styled from 'styled-components'
import { PageTemplate, Header, Footer, Paragraph, Heading } from 'components'
import qr_code from './qrcode.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4vw;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  & > * {
    flex: 1;
  }
`
const QRCode = styled.div`
  background-image: url(${qr_code});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
`

const SharingPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Wrapper>
        <Heading level={2}>
          For the best experience, please scan the QR code below and check the
          pretty page in your mobile.
        </Heading>
        <QRCode />
      </Wrapper>
    </PageTemplate>
  )
}

export default SharingPage
