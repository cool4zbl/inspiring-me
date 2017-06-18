import React from 'react'
import styled from 'styled-components'

import { PageTemplate, Header, Footer, Heading,
  SingleDatePickerWrapper
} from 'components'

const StyledHeading = styled(Heading)`
  text-align: center;
`

const DayPickerWrapper = ({ className, children }) => {
  const Wrapper = styled.div``
  return (
    <Wrapper className={className}>
      <SingleDatePickerWrapper />
    </Wrapper>
  )
}

// move DayPicker to the center header
const StyledPicker = styled(DayPickerWrapper)`
  z-index: 1012;
  position: absolute;
  top: .25rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <StyledPicker />
      <StyledHeading>WE ARE TOGETHER 100 DAYS! 😆</StyledHeading>

    </PageTemplate>
  )
}

export default HomePage
