import {
  CardHeader,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

import { messages } from '../../../locales'
import { QuoteApiResponseItem } from '../../../types/quotesApi'

const msgs = messages.randomQuotes

interface Props {
  isAutoNextEnabled: boolean
  quoteObj?: QuoteApiResponseItem
  toggleAutoNext: () => void
}

export const QuoteHeader = ({
  toggleAutoNext,
  quoteObj,
  isAutoNextEnabled,
}: Props) => {
  const { formatMessage } = useIntl()

  return (
    <CardHeader
      title={
        <Grid
          container
          alignItems="center"
          display="flex"
          justifyContent="space-between"
        >
          <Grid item sm="auto" xs={12}>
            <Typography variant="h5">{quoteObj?.author}</Typography>
          </Grid>
          <Grid item sm="auto" xs={12}>
            <FormGroup>
              <FormControlLabel
                checked={isAutoNextEnabled}
                control={<Checkbox onClick={toggleAutoNext} />}
                label={formatMessage(msgs.autoNextQuote)}
              />
            </FormGroup>
          </Grid>
        </Grid>
      }
    />
  )
}
