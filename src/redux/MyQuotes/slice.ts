import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { saveFavoriteQuotesToLocalStorage } from '../../utils'
import { initialState } from './model'

export const MyQuotesSlice = createSlice({
  initialState,
  name: 'MyQuotes',
  reducers: {
    addRandomQuoteToHistory: (state, { payload }: PayloadAction<number>) => {
      state.randomQuotesHistory.push(payload)
    },
    removeLastQuoteFromRandomHistory: (state) => {
      if (state.randomQuotesHistory.length) {
        state.randomQuotesHistory.pop()
      }
    },
    toggleFavouriteQuote: (state, { payload }: PayloadAction<number>) => {
      if (!state.favoriteQuotes[payload]) {
        state.favoriteQuotes[payload.toString()] = payload
      } else {
        delete state.favoriteQuotes[payload.toString()]
      }

      saveFavoriteQuotesToLocalStorage(state.favoriteQuotes)
    },
  },
})
