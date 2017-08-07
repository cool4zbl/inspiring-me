import React from 'react'
import styled, { keyframes } from 'styled-components'
import { font, palette } from 'styled-theme'
import {
  Icon,
  PageTemplate,
  Header,
  Footer,
  Heading,
  SingleDatePickerWrapper,
  Block,
  Utils,
  DaysBadge,
  QuoteWrapper,
} from 'components'
import LOADING from '../../loading.gif'

const HideImg = styled.img`display: none;`

const heartbeat = keyframes`
  from {
  transform: scale(.5);
  }
  23%, 77% {
  transform: scale(.8);
  }
54% {
  transform: scale(1.2);
  }
  to {
  transform: scale(.5);
  }
`

const IconHeart = styled(Icon)`
  position: absolute;
  right: 1em; top: .6em;
  z-index: 1002;
  margin-left: .5em;
  vertical-align: middle;
  animation: ${heartbeat} 1.5s linear infinite;
`

const Wrapper = styled(Block)`
  display: flex;
  flex-flow: column wrap;
  height: 86vh;
  justify-content: center;
  align-items: center;
`

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      bgImgUrl: LOADING,
      hideBadge: false,
      openQuote: false,
      loadingImgUrl: '',
      quote: {},
    }
    this.shouldTransparent = null
    this.handleImgLoaded = this.handleImgLoaded.bind(this)
    this.handleWrapperClick = this.handleWrapperClick.bind(this)
    this.handleIconClick = this.handleIconClick.bind(this)
    this.handleDaysBadgeClick = this.handleDaysBadgeClick.bind(this)
    this.handleQuoteWrapperClick = this.handleQuoteWrapperClick.bind(this)
  }

  componentWillMount() {
    if (!Utils.mediaQuery()) {
      location.hash = 'sharing'
      return
    }

    this.setNewBg()
  }

  componentDidMount() {
    this.setNewQuote()
  }

  handleIconClick(e) {
    e.stopPropagation()
    e.preventDefault()
    const { bgImgUrl } = this.state
    if (bgImgUrl === LOADING) {
      return
    }
    this.setState(
      {
        bgImgUrl: LOADING,
      },
      () => {
        this.setNewBg()
        this.setNewQuote()
      }
    )
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
      bgImgUrl = await Utils.fetchImg()
      await self.setState(
        {
          loadingImgUrl: bgImgUrl,
          bgImgUrl: LOADING,
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
    return fetch(
      'https://random-quote-generator.herokuapp.com/api/quotes/random'
    )
      .then(r => r.json())
      .then(quote => this.setState({ quote }))
      .catch(err => {
        console.log('err', err)
      })
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
        <HideImg src={loadingImgUrl} onLoad={this.handleImgLoaded} />
        <Wrapper onClick={this.handleWrapperClick}>
          <IconHeart icon="heart" onClick={this.handleIconClick} />
          <DaysBadge
            hide={hideBadge}
            flex={3}
            time={date}
            onClick={this.handleDaysBadgeClick}
          />
          <QuoteWrapper
            flex={3}
            quote={quote}
            onClick={this.handleQuoteWrapperClick}
            className={openQuote ? 'opened' : ''}
          />
        </Wrapper>
      </PageTemplate>
    )
  }
}
