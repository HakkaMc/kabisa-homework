import { Card, CardContent, CardHeader, List } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

import { messages } from '../../../locales'
import { DotItem } from './DotItem'

const msgs = messages.about.specialFeatures

export const SpecialFeatures = () => {
  const { formatMessage } = useIntl()

  return (
    <Card>
      <CardHeader title={formatMessage(msgs.title)} />
      <CardContent>
        <List>
          <DotItem>
            Using redux actions without necessity to use dispatch function
          </DotItem>
          <DotItem>React Intl dictionary in one tree structure</DotItem>
        </List>
      </CardContent>
    </Card>
  )
}
