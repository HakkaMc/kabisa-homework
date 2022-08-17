import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import React from 'react'

import { QuoteApiResponseItem } from '../../types/quotesApi'
import { QuoteActions } from '../QuoteActions/QuoteActions'
import { QuoteContent } from '../QuoteContent/QuoteContent'

interface Props {
  hasFindSimilar?: boolean
  lg: number
  md: number
  queueObj: QuoteApiResponseItem
}

export const QuoteGridItem = ({ queueObj, md, lg, hasFindSimilar }: Props) => {
  return (
    <Grid key={queueObj.id} item lg={lg} md={md} xs={12}>
      <Card>
        <QuoteContent quoteObj={queueObj} />
        <QuoteActions hasFindSimilar={hasFindSimilar} quoteId={queueObj.id} />
      </Card>
    </Grid>
  )
}
