import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Box, ListItem, ListItemIcon } from '@mui/material'
import React, { ReactNode } from 'react'

export interface Props {
  children: string | ReactNode
}

export const DotItem = ({ children }: Props) => {
  return (
    <ListItem>
      <ListItemIcon>
        <FiberManualRecordIcon />
      </ListItemIcon>
      <Box>{children}</Box>
    </ListItem>
  )
}
