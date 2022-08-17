import axios from 'axios'

import { QUOTES_API_URL } from '../constants/api'
import { store } from '../redux'
import { reduxActions } from '../redux/store'
import { QuoteApiResponseItem, QuoteApiResponseItems } from '../types/quotesApi'

const quotesApiInstance = axios.create({
  baseURL: QUOTES_API_URL,
  timeout: 1000,
})

export const quotesApiEndpoints = {
  getAllQuotes: () =>
    quotesApiInstance.get<QuoteApiResponseItems>('/quotes.json'),
  getRandomQuote: () =>
    quotesApiInstance.get<QuoteApiResponseItem>('/random.json'),
  getSingleQuote: (quoteId: number) =>
    quotesApiInstance.get<QuoteApiResponseItem>(`/quotes/${quoteId}.json`),
}

quotesApiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    store.dispatch(
      reduxActions.ErrorModal.addError({
        content: JSON.stringify(error),
        title: 'API Error',
      })
    )

    return error
  }
)
