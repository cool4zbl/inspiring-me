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
      quote: {}
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

  getBgImgUrl () {
    const URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg'
    return URL
  }

  componentWillMount() {
    const bgImgUrl = Utils.genRandomBg()
    this.setState({ bgImgUrl })
  }

  componentDidMount() {
    const getQuote = () => {
      return fetch('https://random-quote-generator.herokuapp.com/api/quotes/random').then(r => r.json())
        .catch(err => { console.log('err', e) })
    }
    getQuote().then(quote => {
      this.setState({ quote })
    })
  }

  diffDays () {
    const { date } = this.state
    const days = this.diff(date, BEGIN_DATE)
    return days
  }

  render() {
    const { date, bgImgUrl, quote } = this.state
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
