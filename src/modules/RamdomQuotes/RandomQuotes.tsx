import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Box, Button, Card, CardActions, Grid } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { useIntl } from 'react-intl'

import { QuoteActions, QuoteContent } from '../../components'
import { useRandomQuote } from '../../hooks'
import { messages } from '../../locales'
import { Progress } from './modules/Progress'
import { QuoteHeader } from './modules/QuoteHeader'

const msgs = messages.randomQuotes

const TIMEOUT = 5_000

export const RandomQuotes = () => {
  const { formatMessage } = useIntl()

  const [isAutoNextEnabled, setAutoNext] = useState(false)

  const { isLoading, goToPreviousQuote, goToNextQuote, actualQuote } =
    useRandomQuote()

  const toggleAutoNext = useCallback(() => {
    const newState = !isAutoNextEnabled
    setAutoNext(newState)
  }, [setAutoNext, isAutoNextEnabled])

  return (
    <Card>
      <QuoteContent
        isLoading={isLoading}
        ownHeader={
          <QuoteHeader
            isAutoNextEnabled={isAutoNextEnabled}
            quoteObj={actualQuote}
            toggleAutoNext={toggleAutoNext}
          />
        }
        quoteObj={actualQuote}
      />

      {isAutoNextEnabled && (
        <Progress
          goToNextQuote={goToNextQuote}
          quoteId={actualQuote?.id}
          timeout={TIMEOUT}
        />
      )}

      {!isAutoNextEnabled && (
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid
            display="flex"
            flexDirection={{ sm: 'row', xs: 'column' }}
            justifyContent={{ sm: 'space-between' }}
          >
            <Button
              disabled={isLoading}
              startIcon={<ArrowLeftIcon />}
              onClick={goToPreviousQuote}
            >
              {formatMessage(msgs.prevQuote)}
            </Button>

            <Box
              display={{ md: 'block', xs: 'none' }}
              sx={{ width: '100px' }}
            />

            <Button
              disabled={isLoading}
              endIcon={<ArrowRightIcon />}
              onClick={goToNextQuote}
            >
              {formatMessage(msgs.nextRandomQuote)}
            </Button>
          </Grid>
        </CardActions>
      )}

      <QuoteActions
        hasFindSimilar={!isAutoNextEnabled}
        isLoading={isLoading}
        quoteId={actualQuote?.id}
      />
    </Card>
  )
}
