import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { quotesApiEndpoints } from '../api'
import { dispatchedActions, useSelector } from '../redux'
import { QuoteApiResponseItem } from '../types/quotesApi'

export const useRandomQuote = () => {
  /**
   * The useEffect used as ComponentDidMount is called twice in the begining regardless the dependencies array is filled or is empty.
   * Probably a bug in React 18. So implemented a simple semaphore to avoid that problem.
   */
  const canInit = useRef(true)

  const [isLoading, setLoading] = useState(false)

  const [actualQuote, setActualQuote] = useState<
    QuoteApiResponseItem | undefined
  >(undefined)
  const [nextQuote, setNextQuote] = useState<QuoteApiResponseItem | undefined>(
    undefined
  )
  const [previousQuote, setPreviousQuote] = useState<
    QuoteApiResponseItem | undefined
  >(undefined)

  const randomQuotesHistory = useSelector(
    (state) => state.MyQuotes.randomQuotesHistory
  )

  const randomQuotesHistoryRef = useRef(randomQuotesHistory)
  randomQuotesHistoryRef.current = randomQuotesHistory

  const goToNextQuote = useCallback(async () => {
    if (actualQuote && nextQuote) {
      setLoading(true)

      setPreviousQuote(actualQuote)

      setActualQuote(nextQuote)
      dispatchedActions.MyQuotes.addRandomQuoteToHistory(nextQuote.id)

      const response = await quotesApiEndpoints.getRandomQuote()
      setNextQuote(response.data)
      setLoading(false)
    }
  }, [
    actualQuote,
    nextQuote,
    setActualQuote,
    setNextQuote,
    setPreviousQuote,
    setLoading,
  ])

  const goToPreviousQuote = useCallback(async () => {
    if (randomQuotesHistory.length > 1) {
      setLoading(true)

      // The last quote ID in history array is the actual shown quote ID
      const previousQuoteId =
        randomQuotesHistory[randomQuotesHistory.length - 2]
      const previousPreviousQuoteId =
        randomQuotesHistory.length > 2
          ? randomQuotesHistory[randomQuotesHistory.length - 3]
          : undefined

      dispatchedActions.MyQuotes.removeLastQuoteFromRandomHistory()

      if (previousPreviousQuoteId) {
        const response = await quotesApiEndpoints.getSingleQuote(
          previousPreviousQuoteId
        )
        setPreviousQuote(response.data)
      } else {
        setPreviousQuote(undefined)
      }

      const previousQuoteResponse = await quotesApiEndpoints.getSingleQuote(
        previousQuoteId
      )
      setActualQuote(previousQuoteResponse.data)

      const nextQuoteResponse = await quotesApiEndpoints.getRandomQuote()
      setNextQuote(nextQuoteResponse.data)

      setLoading(false)
    }
  }, [
    randomQuotesHistory,
    setPreviousQuote,
    setNextQuote,
    setActualQuote,
    setLoading,
  ])

  useEffect(() => {
    if (canInit.current === true) {
      canInit.current = false

      const qHistory = randomQuotesHistoryRef.current

      const previousQuoteId =
        qHistory.length > 1 ? qHistory[qHistory.length - 2] : undefined

      const actualQuoteId = qHistory.length
        ? qHistory[qHistory.length - 1]
        : undefined

      if (previousQuoteId) {
        quotesApiEndpoints.getSingleQuote(previousQuoteId).then((response) => {
          setPreviousQuote(response.data)
        })
      }

      if (actualQuoteId) {
        quotesApiEndpoints.getSingleQuote(actualQuoteId).then((response) => {
          setActualQuote(response.data)
        })
      } else {
        quotesApiEndpoints.getRandomQuote().then((response) => {
          setActualQuote(response.data)
          dispatchedActions.MyQuotes.addRandomQuoteToHistory(response.data.id)
        })
      }

      quotesApiEndpoints.getRandomQuote().then((response) => {
        setNextQuote(response.data)
      })
    }
  }, [
    setActualQuote,
    setPreviousQuote,
    setNextQuote,
    randomQuotesHistoryRef,
    canInit,
  ])

  const areDataLoaded = useMemo(
    () => nextQuote && actualQuote,
    [nextQuote, actualQuote]
  )

  return {
    actualQuote,
    goToNextQuote,
    goToPreviousQuote,
    isLoading: isLoading || !areDataLoaded,
    nextQuote,
    previousQuote,
    quotes: [previousQuote, actualQuote, nextQuote],
  }
}
