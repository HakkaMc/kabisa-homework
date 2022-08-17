import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import React, { useEffect, useMemo, useState } from 'react'
import { useIntl } from 'react-intl'

import { quotesApiEndpoints } from '../../api'
import { QuoteGridItem } from '../../components'
import { messages } from '../../locales'
import { useSelector } from '../../redux'
import { QuoteApiResponseItems } from '../../types/quotesApi'

const msgs = messages.favoriteQuotes

export const FavoriteQuotes = () => {
  const { formatMessage } = useIntl()

  const favoriteQuotes = useSelector((state) => state.MyQuotes.favoriteQuotes)

  const [quotes, setQuotes] = useState<QuoteApiResponseItems>([])

  const favoriteQuotesArray = useMemo(
    () => Object.values(favoriteQuotes),
    [favoriteQuotes]
  )

  useEffect(() => {
    const allPromises = favoriteQuotesArray.map((queueId) =>
      quotesApiEndpoints.getSingleQuote(queueId)
    )
    Promise.all(allPromises).then((responses) => {
      const quotes = responses.map((response) => response.data)

      setQuotes(quotes)
    })
  }, [favoriteQuotesArray, setQuotes])

  const columns = {
    lg: 12,
    md: 12,
    xs: 12,
  }

  if (favoriteQuotesArray.length > 1) {
    columns.lg = 6
    columns.md = 6
  }
  if (favoriteQuotesArray.length > 2) {
    columns.lg = 4
  }

  if (!favoriteQuotesArray.length) {
    return (
      <Card>
        <CardContent>{formatMessage(msgs.noQuotes)}</CardContent>
      </Card>
    )
  }

  return (
    <Grid container spacing={3}>
      {quotes.map((queueObj) => (
        <QuoteGridItem
          key={queueObj.id}
          hasFindSimilar
          lg={columns.lg}
          md={columns.md}
          queueObj={queueObj}
        />
      ))}
    </Grid>
  )
}
