import React from 'react'
import styled from 'styled-components'

import { PageTemplate, Header, Footer, Heading } from 'components'

const StyledHeading = styled(Heading)`
  text-align: center;
`

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <StyledHeading>WE ARE TOGETHER 100 DAYS! 😆</StyledHeading>
    </PageTemplate>
  )
}

export default HomePage
