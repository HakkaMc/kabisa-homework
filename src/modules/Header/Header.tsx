import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import * as React from 'react'

import { LanguageSwitch } from './modules/LanguageSwitch'

interface HeaderProps {
  handleMobileMenuButtonClick: () => void
}

export const Header = ({ handleMobileMenuButtonClick }: HeaderProps) => (
  <>
    <AppBar color="primary" elevation={0} position="sticky">
      <Toolbar>
        <Grid container alignItems="center" spacing={1}>
          <Grid item sx={{ display: { sm: 'none', xs: 'block' } }}>
            <IconButton
              aria-label="open drawer"
              color="inherit"
              edge="start"
              onClick={handleMobileMenuButtonClick}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs />
          <Grid item>
            <LanguageSwitch />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </>
)
