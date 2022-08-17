import { Box, Card, CardContent, CardHeader, List } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

import { messages } from '../../../locales'
import { DotItem } from './DotItem'

const msgs = messages.about.usedTechs

export const UsedTechs = () => {
  const { formatMessage } = useIntl()

  return (
    <Card>
      <CardHeader title={formatMessage(msgs.title)} />
      <CardContent>
        <List>
          <DotItem>Create React App</DotItem>
          <DotItem>React 18, React Router 6, React Intl</DotItem>
          <DotItem>Redux Toolkit</DotItem>
          <DotItem>
            <Box>
              <Box>Material UI</Box>
              <Box>
                <Box>
                  Template based on:{' '}
                  <a href="https://mui.com/store/items/paperbase">
                    https://mui.com/store/items/paperbase
                  </a>
                </Box>
              </Box>
            </Box>
          </DotItem>
          <DotItem>Axios</DotItem>
        </List>
      </CardContent>
    </Card>
  )
}
