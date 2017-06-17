import React from 'react'

import { PageTemplate, Header, Footer, Heading } from 'components'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading level={1}>Hello World</Heading>
      <Heading level={2}>I am Rocket 🚀</Heading>
    </PageTemplate>
  )
}

export default HomePage
