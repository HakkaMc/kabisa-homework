import FavoriteIcon from '@mui/icons-material/Favorite'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import { Divider } from '@mui/material'
import Drawer, { DrawerProps } from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import useMediaQuery from '@mui/material/useMediaQuery'
import React from 'react'
import { useIntl } from 'react-intl'

import { Routes } from '../../constants/routes'
import { messages } from '../../locales'
import { dispatchedActions, useSelector } from '../../redux'
import { DRAWER_WIDTH, leftPanel, theme } from '../../theme/theme'
import { NavLink } from './modules/NavLink'

const msgs = messages.leftPanel

const handleDrawerToggle = () => {
  dispatchedActions.App.toggleIsMobileLeftPanelOpened()
}

export const LeftPanel = () => {
  const { formatMessage } = useIntl()

  const isMobileLeftPanelOpened = useSelector(
    (state) => state.App.isMobileLeftPanelOpened
  )

  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'))

  let drawerProps: DrawerProps = {
    PaperProps: { style: { width: DRAWER_WIDTH } },
    onClose: handleDrawerToggle,
    open: isMobileLeftPanelOpened,
    variant: 'temporary',
  }

  if (isSmUp) {
    drawerProps = {
      PaperProps: { style: { width: DRAWER_WIDTH } },
      sx: { display: { sm: 'block', xs: 'none' } },
      variant: 'permanent',
    }
  }

  return (
    <Drawer {...drawerProps}>
      <List disablePadding>
        <ListItem sx={leftPanel.title}>{formatMessage(msgs.title)}</ListItem>
        <NavLink
          Icon={HomeIcon}
          route={Routes.Dashboard}
          text={formatMessage(msgs.dashboard)}
        />
        <Divider />
        <NavLink
          Icon={FavoriteIcon}
          route={Routes.Favorites}
          text={formatMessage(msgs.favorites)}
        />
        <Divider />
        <NavLink
          Icon={InfoIcon}
          route={Routes.About}
          text={formatMessage(msgs.about)}
        />
        <Divider />
      </List>
    </Drawer>
  )
}
