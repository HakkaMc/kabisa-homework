import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { IntlProvider } from '../../locales'
import { ErrorModal, Skelet } from '../../modules'
import { store } from '../../redux'
import { theme } from '../../theme/theme'

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <IntlProvider>
        <ThemeProvider theme={theme}>
          <>
            <Skelet />
            <ErrorModal />
          </>
        </ThemeProvider>
      </IntlProvider>
    </BrowserRouter>
  </Provider>
)
