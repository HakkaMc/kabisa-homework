import { CardHeader } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'

import { QuoteApiResponseItem } from '../../types/quotesApi'

interface Props {
  isLoading?: boolean
  ownHeader?: React.ReactNode
  quoteObj?: QuoteApiResponseItem
}

export const QuoteContent = ({ quoteObj, isLoading, ownHeader }: Props) => {
  return (
    <>
      {ownHeader ? ownHeader : <CardHeader title={quoteObj?.author} />}
      <CardContent>
        {!!quoteObj && (
          <Typography
            align="center"
            sx={{ filter: isLoading ? 'blur(4px)' : 'none' }}
          >
            {quoteObj.quote}
          </Typography>
        )}
      </CardContent>
    </>
  )
}
