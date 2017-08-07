import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { normalize } from 'polished'

import { HomePage, SharingPage, NotFoundPage } from 'components'

import theme from './themes/default'

injectGlobal`
  ${normalize()}
  body {
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    margin: 0;
  }
  * {
    -webkit-tap-highlight-color: transparent;
    tap-highlight-color: transparent;
    box-sizing: border-box;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Route path="/" component={HomePage} exact />
        <Route path="/sharing" component={SharingPage} exact />
        <Route component={NotFoundPage} />
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
