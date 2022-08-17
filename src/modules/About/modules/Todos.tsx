import { Card, CardContent, CardHeader, List } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

import { messages } from '../../../locales'
import { DotItem } from './DotItem'

const msgs = messages.about.todos

export const Todos = () => {
  const { formatMessage } = useIntl()

  return (
    <Card>
      <CardHeader title={formatMessage(msgs.title)} />
      <CardContent>
        <List>
          <DotItem>Caching AJAX data</DotItem>
          <DotItem>
            Create packages in the stack to eliminate relative path in imports
          </DotItem>
          <DotItem>Write more unit tests</DotItem>
        </List>
      </CardContent>
    </Card>
  )
}
