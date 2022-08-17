import { Card, CardContent, CardHeader, List } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

import { messages } from '../../../locales'
import { IconItem, Props as IconItemProps } from './IconItem'

const msgs = messages.about

// TODO - move to dictionary
const tasks: Array<IconItemProps> = [
  {
    done: true,
    result: 'Implemented.',
    task: 'Fetch quotes from an external service (eg: http://quotes.stormconsultancy.co.uk/api)',
  },
  {
    done: false,
    result:
      "Not implemented. I have no social media account so I can't test if my soulution would work properly.",
    task: 'Share ‘quotes’ on social media, like Facebook or Twitter',
  },
  {
    done: false,
    result: 'Not implemented. It would require a backend application.',
    task: 'Allow users to rate quotes and view other people’s ratings',
  },
  {
    done: false,
    result: 'Not implemented. It would require a backend application.',
    task: 'Tweak the random quote logic to prioritize showing highly rated quotes to new users',
  },
  {
    done: true,
    result: 'Find by similar length implemented.',
    task: 'Find quotes comparable to the currently shown quote',
  },
  {
    done: true,
    result: 'Simple automatic slideshow implemented.',
    task: 'Create a slideshow of random quotes being shown',
  },
  {
    done: true,
    result: 'Basic responsive design implemented.',
    task: 'Create a mobile friendly application, keeping different devices in mind',
  },
]

export const FeatureSummary = () => {
  const { formatMessage } = useIntl()

  return (
    <Card>
      <CardHeader title={formatMessage(msgs.featureSummary.title)} />
      <CardContent>
        <List>
          {tasks.map((taskObj) => (
            <IconItem key={taskObj.task} {...taskObj} />
          ))}
        </List>
      </CardContent>
    </Card>
  )
}
