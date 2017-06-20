import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { font, palette, size } from 'styled-theme'
import { PageTemplate, Header, Footer, Heading,
  SingleDatePickerWrapper
} from 'components'

const StyledHeading = styled(Heading)`
  text-align: center;
`

// move SDP to the center header
const DatePickerWrapper = styled.div`
  z-index: 1012;
  position: absolute;
  top: .25rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background-color: ${palette('danger', 1)};
`

const BEGIN_DATE = moment('2017-03-12')

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: moment()
    }
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleDateChange (pickDate) {
    if (!moment.isMoment(pickDate)) {
      return
    }
    this.setState({
      date: pickDate
    })
  }

  computeTimeFromX (a, b) {
    if (!moment.isMoment(a) || !moment.isMoment(b)) {
      return
    }
    return a.from(b, true)
  }

  diff (b, a) {
    if (!moment.isMoment(a) || !moment.isMoment(b)) {
      return
    }
    return b.diff(a, 'days')
  }


  render() {
    const { date } = this.state
    return (
      <PageTemplate header={<Header />} footer={<Footer />}>
      <DatePickerWrapper className={`DatePicker`}>
        <SingleDatePickerWrapper handleDateChange={this.handleDateChange}/>
      </DatePickerWrapper>
        <StyledHeading>TOGETHER { this.diff(date, BEGIN_DATE) } DAYS! 😆</StyledHeading>
      </PageTemplate>
    )
  }
}
