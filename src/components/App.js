import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
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
    <HashRouter>
      <ThemeProvider theme={theme}>
        <div>
          <Route path="/" component={HomePage} exact />
          <Route path="/sharing" component={SharingPage} exact />
          <Route component={NotFoundPage} />
        </div>
      </ThemeProvider>
    </HashRouter>
  )
}

export default App
