import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import { QuoteGridItem } from '../../components'
import { messages } from '../../locales'
import { QuoteApiResponseItems } from '../../types/quotesApi'
import { findSimilarQuotes } from '../../utils'

const msgs = messages.similarQuotesModal

interface Props {
  handleCloseModal: () => void
  quoteId: number
}

export const SimilarQuotesModal = ({ quoteId, handleCloseModal }: Props) => {
  const [isLoading, setLoading] = useState(true)
  const [quotes, setQuotes] = useState<QuoteApiResponseItems>([])

  const { formatMessage } = useIntl()

  useEffect(() => {
    findSimilarQuotes(quoteId).then((data) => {
      setQuotes(data)
      setLoading(false)
    })
  }, [quoteId, setLoading])

  return (
    <Dialog fullWidth open maxWidth="lg" onClose={handleCloseModal}>
      <DialogTitle>{formatMessage(msgs.title)}</DialogTitle>
      <DialogContent>
        {isLoading && (
          <Typography>{formatMessage(msgs.loadingQuotes)}</Typography>
        )}

        {!isLoading && quotes.length === 0 && (
          <Typography>
            Bohužel žádné citáty s podobnou délkou nebyly nalezeny
          </Typography>
        )}
        {!!quotes.length && (
          <Grid container spacing={3}>
            {quotes.map((queueObj) => (
              <QuoteGridItem
                key={queueObj.id}
                lg={4}
                md={6}
                queueObj={queueObj}
              />
            ))}
          </Grid>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal}>
          {formatMessage(messages.common.close)}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
