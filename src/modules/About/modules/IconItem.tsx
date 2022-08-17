import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { Box, ListItem, ListItemIcon } from '@mui/material'
import React, { ReactNode } from 'react'

export interface Props {
  done: boolean
  result: string | ReactNode
  task: string
}

export const IconItem = ({ done, task, result }: Props) => {
  return (
    <ListItem>
      <ListItemIcon>
        {done ? <CheckIcon color="success" /> : <CloseIcon color="error" />}
      </ListItemIcon>
      <Box>
        <i>{task}</i>
        <Box pt={1}>{result}</Box>
      </Box>
    </ListItem>
  )
}
