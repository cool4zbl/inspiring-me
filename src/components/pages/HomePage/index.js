import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { PageTemplate, Header, Footer, Heading,
  SingleDatePickerWrapper
} from 'components'

const StyledHeading = styled(Heading)`
  text-align: center;
`

const DayPickerWrapper = ({ className, children, ...props }) => {
  const Wrapper = styled.div``
  return (
    <Wrapper className={className}>
      <SingleDatePickerWrapper {...props}/>
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
export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: moment()
    }
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleDateChange (pickDate) {
    this.setState({
      date: pickDate
    })
  }

  render() {
    const { date } = this.state
    return (
      <PageTemplate header={<Header />} footer={<Footer />}>
        <StyledPicker handleDateChange={this.handleDateChange}/>
        <StyledHeading>TOGETHER {date.days()} DAYS! 😆</StyledHeading>

      </PageTemplate>
    )
  }
}
