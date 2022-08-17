import { ListItemButton } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SvgIcon from '@mui/material/SvgIcon/SvgIcon'
import React from 'react'
import { NavLink as NavLinkComponent } from 'react-router-dom'

import { Routes } from '../../../constants/routes'
import { leftPanel, WHITE_COLOR } from '../../../theme/theme'
import { SxTheme } from '../../../types/mix'

interface Props {
  Icon: typeof SvgIcon
  route: Routes
  text: string | React.ReactNode
}

export const NavLink = ({ route, text, Icon }: Props) => (
  <NavLinkComponent style={{ textDecoration: 'none' }} to={route}>
    {({ isActive }) => {
      const style: SxTheme = { ...leftPanel.navLink }
      if (isActive) {
        // @ts-ignore
        style.color = WHITE_COLOR
      }

      return (
        <ListItem disablePadding sx={style}>
          <ListItemButton sx={{ px: 4, py: 1.5 }}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItemButton>
        </ListItem>
      )
    }}
  </NavLinkComponent>
)
