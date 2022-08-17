import FavoriteIcon from '@mui/icons-material/Favorite'
import { Button, CardActions, IconButton } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { useIntl } from 'react-intl'

import { messages } from '../../locales'
import { SimilarQuotesModal } from '../../modules'
import { dispatchedActions, useSelector } from '../../redux'

const msgs = messages.quoteActions

interface Props {
  hasFindSimilar?: boolean
  isLoading?: boolean
  quoteId?: number
}

export const QuoteActions = ({ quoteId, isLoading, hasFindSimilar }: Props) => {
  const [isSimilarModalShown, setIsSimilarModalShow] = useState(false)

  const { formatMessage } = useIntl()

  const isFavorite = useSelector(
    (state) =>
      quoteId !== undefined && state.MyQuotes.favoriteQuotes[quoteId.toString()]
  )

  const toggleFavouriteQuote = useCallback(() => {
    if (quoteId !== undefined) {
      dispatchedActions.MyQuotes.toggleFavouriteQuote(quoteId)
    }
  }, [quoteId])

  const handleFindWithSimilarLength = useCallback(() => {
    setIsSimilarModalShow(true)
  }, [setIsSimilarModalShow])

  const handleCloseModal = useCallback(() => {
    setIsSimilarModalShow(false)
  }, [setIsSimilarModalShow])

  return (
    <>
      <CardActions>
        <IconButton
          aria-label={formatMessage(msgs.addToFavoritesAria)}
          color={isFavorite ? 'error' : 'default'}
          disabled={isLoading}
          onClick={toggleFavouriteQuote}
        >
          <FavoriteIcon />
        </IconButton>

        {hasFindSimilar && (
          <Button
            aria-label={formatMessage(msgs.findSimilarAria)}
            disabled={isLoading && isSimilarModalShown}
            onClick={handleFindWithSimilarLength}
          >
            {formatMessage(msgs.findSimilar)}
          </Button>
        )}
      </CardActions>
      {isSimilarModalShown && quoteId && (
        <SimilarQuotesModal
          handleCloseModal={handleCloseModal}
          quoteId={quoteId}
        />
      )}
    </>
  )
}
