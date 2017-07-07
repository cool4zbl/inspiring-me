import React from 'react'
import moment from 'moment'

import styled from 'styled-components'
import { prop } from 'styled-tools'
import { font, palette, size } from 'styled-theme'
import { PageTemplate, Header, Footer, Heading,
  SingleDatePickerWrapper, Block, Utils,
  DaysBadge, QuoteWrapper
} from 'components'

// todo: Hero component
const Wrapper = styled(Block)`
  display: flex;
  flex-flow: column wrap;
  height: 80vh;
  justify-content: center;
  align-items: center;
`

// Move SDP to the center header
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
      date: moment(),
      bgImgUrl: '',
      quote: {},
      days: 0
    }
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleDateChange (pickDate) {
    const {date, days} = this.state
    if (!moment.isMoment(pickDate)) {
      return
    }
    // FIXME: fix warning
    const nDays = this.diff(pickDate, BEGIN_DATE)
    if (nDays === days) {
      return
    }
    this.setState({
      date: pickDate
    }, () => {
      this.setNewQuote()
      this.setNewBg()
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

  componentWillMount() {
    this.setNewBg()
  }

  componentDidMount() {
    this.setNewQuote()
  }

  setNewBg() {
    const bgImgUrl = Utils.genRandomBg()
    this.setState({ bgImgUrl })
  }

  setNewQuote () {
    return fetch('https://random-quote-generator.herokuapp.com/api/quotes/random')
      .then(r => r.json())
      .then( quote => this.setState({ quote }))
      .catch(err => { console.log('err', e) })
  }

  diffDays () {
    const { date, days } = this.state
    const _days = this.diff(date, BEGIN_DATE)
    if (_days !== days)
      this.setState({
        days: _days
      });
    return days
  }

  render() {
    const { date, bgImgUrl, quote, days } = this.state
    return (
      <PageTemplate header={<Header />} footer={<Footer />}
      bgImgUrl={bgImgUrl}>
        <DatePickerWrapper className={`DatePicker`}>
          <SingleDatePickerWrapper handleDateChange={this.handleDateChange}/>
        </DatePickerWrapper>
        <Wrapper>
          <DaysBadge flex={3}
            days={this.diffDays()}></DaysBadge>
          <QuoteWrapper flex={2} quote={quote}>
          </QuoteWrapper>
        </Wrapper>
      </PageTemplate>
    )
  }
}
