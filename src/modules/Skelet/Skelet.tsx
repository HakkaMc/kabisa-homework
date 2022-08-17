import Box from '@mui/material/Box'
import * as React from 'react'

import { dispatchedActions } from '../../redux/store'
import {
  APP_CONTENT_BG_COLOR,
  DRAWER_WIDTH,
  FOOTER_BG_COLOR,
} from '../../theme/theme'
import { ContentRoutes, Copyright, Header, LeftPanel } from '..'

const handleMobileMenuButtonClick = () => {
  dispatchedActions.App.toggleIsMobileLeftPanelOpened()
}

export const Skelet = () => (
  <Box sx={{ display: 'flex', minHeight: '100vh' }}>
    <Box
      component="nav"
      sx={{ flexShrink: { sm: 0 }, width: { sm: DRAWER_WIDTH } }}
    >
      <LeftPanel />
    </Box>
    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
      <Header handleMobileMenuButtonClick={handleMobileMenuButtonClick} />
      <Box
        component="main"
        sx={{ bgcolor: APP_CONTENT_BG_COLOR, flex: 1, px: 4, py: 6 }}
      >
        <ContentRoutes />
      </Box>
      <Box component="footer" sx={{ bgcolor: FOOTER_BG_COLOR, p: 2 }}>
        <Copyright />
      </Box>
    </Box>
  </Box>
)
