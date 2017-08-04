import React from 'react'
import moment from 'moment'

import styled from 'styled-components'
import { prop } from 'styled-tools'
import { font, palette, size } from 'styled-theme'
import {
  PageTemplate,
  Header,
  Footer,
  Heading,
  SingleDatePickerWrapper,
  Block,
  Utils,
  DaysBadge,
  QuoteWrapper,
  Quotes,
} from 'components'
import loading from '../../loading.gif'

const HideImg = styled.img`display: none;`

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
  position: fixed;
  top: 0;
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
      bgImgUrl: loading,
      hideBadge: false,
      openQuote: false,
      loadingImgUrl: '',
      quote: {},
      days: 0,
    }
    this.shouldTransparent = null
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleDateChange(pickDate) {
    const { date, days } = this.state
    if (!moment.isMoment(pickDate)) {
      return
    }
    // FIXME: fix warning
    const nDays = this.diff(pickDate, BEGIN_DATE)
    if (nDays === days) {
      return
    }
    this.setState(
      {
        date: pickDate,
      },
      () => {
        this.setNewQuote()
        this.setNewBg()
      }
    )
  }

  computeTimeFromX(a, b) {
    if (!moment.isMoment(a) || !moment.isMoment(b)) {
      return
    }
    return a.from(b, true)
  }

  diff(b, a) {
    if (!moment.isMoment(a) || !moment.isMoment(b)) {
      return
    }
    return b.diff(a, 'days')
  }

  componentWillMount() {
    if (!Utils.mediaQuery()) {
      location.href = '/sharing'
      return
    }

    this.setNewBg()
    const days = this.diff(moment(), BEGIN_DATE)
    this.setState({
      days,
    })
  }

  componentDidMount() {
    this.setNewQuote()
  }

  handleImgLoaded() {
    const { loadingImgUrl } = this.state
    this.setState({
      bgImgUrl: loadingImgUrl,
    })
  }

  setNewBg() {
    let bgImgUrl
    ;(async function getBg(self) {
      bgImgUrl = await Utils.genRandomBg()
      await self.setState(
        {
          loadingImgUrl: bgImgUrl,
          bgImgUrl: loading,
        },
        () => {
          // release the object URL since it's no longer needed once the image has been loaded.
          // fixme: need better solution
          // URL.revokeObjectURL(bgImgUrl)
        }
      )
    })(this)
  }

  setNewQuote() {
    const { date, days } = this.state
    let whichDay = moment(date).format('MD')
    let quote
    quote = {
      quote: Quotes[days],
    }
    // hack
    if (whichDay == '712') {
      quote = { ...quote, author: '——— 仙人掌 🌵' }
    }
    quote && this.setState({ quote })
    return
    // return fetch('https://random-quote-generator.herokuapp.com/api/quotes/random')
    //   .then(r => r.json())
    //   .then( quote => this.setState({ quote }))
    //   .catch(err => { console.log('err', e) })
  }

  diffDays() {
    const { date, days } = this.state
    const _days = this.diff(date, BEGIN_DATE)
    if (_days !== days) {
      this.setState({
        days: _days,
      })
    }
    return days
  }

  handleDaysBadgeClick() {
    this.shouldTransparent = false
  }
  handleQuoteWrapperClick() {
    this.shouldTransparent = false
    this.setState({
      openQuote: !this.state.openQuote,
    })
  }

  handleWrapperClick(e) {
    if (this.shouldTransparent === null) {
      this.shouldTransparent = true
    }
    if (this.shouldTransparent) {
      this.setState({ hideBadge: !this.state.hideBadge })
    }
    this.shouldTransparent = null
  }

  render() {
    // loadingImgUrl: 需要加载的 img
    const {
      date,
      bgImgUrl,
      openQuote,
      loadingImgUrl,
      hideBadge,
      quote,
      days,
    } = this.state
    return (
      <PageTemplate header={<Header />} footer={<Footer />} bgImgUrl={bgImgUrl}>
        <HideImg src={loadingImgUrl} onLoad={this.handleImgLoaded.bind(this)} />
        <DatePickerWrapper className={`DatePicker`}>
          <SingleDatePickerWrapper handleDateChange={this.handleDateChange} />
        </DatePickerWrapper>
        <Wrapper onClick={this.handleWrapperClick.bind(this)}>
          <DaysBadge
            hide={hideBadge}
            flex={3}
            days={this.diffDays()}
            onClick={this.handleDaysBadgeClick.bind(this)}
          />
          <QuoteWrapper
            flex={2}
            quote={quote}
            onClick={this.handleQuoteWrapperClick.bind(this)}
            className={openQuote ? 'opened' : ''}
          />
        </Wrapper>
      </PageTemplate>
    )
  }
}
