import { quotesApiEndpoints } from '../api'
import { QuoteApiResponseItems } from '../types/quotesApi'

export const findSimilarQuotes = async (quoteId: number) => {
  const response = await quotesApiEndpoints.getAllQuotes()
  const selectedQuotes: QuoteApiResponseItems = []
  const quoteObj = response.data.find((quoteObj) => quoteObj.id === quoteId)
  const quoteLength = quoteObj?.quote.length || 0
  const rangeFrom = quoteLength * 0.9
  const rangeTo = quoteLength * 1.1

  if (quoteLength) {
    response.data.forEach((quoteObj) => {
      const length = quoteObj.quote.length
      if (quoteObj.id !== quoteId && length >= rangeFrom && length <= rangeTo) {
        selectedQuotes.push(quoteObj)
      }
    })
  }

  return selectedQuotes
}
