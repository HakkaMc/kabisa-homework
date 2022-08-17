import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React, { useCallback, useState } from 'react'

import { SUPPORTED_LANGUAGES } from '../../../constants/mix'
import { dispatchedActions, useSelector } from '../../../redux'
import { shortLanguage } from '../../../utils'

export const LanguageSwitch = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isOpen = !!anchorEl

  const language = useSelector((state) => state.App.language)

  const languageShort = shortLanguage(language)

  const handleLangChange = useCallback(
    (lng: string) => () => {
      dispatchedActions.App.setLanguage(lng)
      setAnchorEl(null)
    },
    [setAnchorEl]
  )

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
    },
    [setAnchorEl]
  )

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [setAnchorEl])

  return (
    <>
      <Button
        aria-controls={isOpen ? 'fade-menu' : undefined}
        aria-expanded={isOpen ? 'true' : undefined}
        aria-haspopup="true"
        color="inherit"
        id="fade-button"
        variant="text"
        onClick={handleClick}
      >
        {languageShort?.toUpperCase()}
      </Button>
      <Menu
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        TransitionComponent={Fade}
        anchorEl={anchorEl}
        id="fade-menu"
        open={isOpen}
        onClose={handleClose}
      >
        {SUPPORTED_LANGUAGES.sort().map((lng) => (
          <MenuItem key={lng} onClick={handleLangChange(lng)}>
            {lng.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
