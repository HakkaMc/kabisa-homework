import { MyQuotes } from '../../types/redux'
import { getFavoriteQuotesToLocalStorage } from '../../utils'

export const initialState: MyQuotes = {
  favoriteQuotes: getFavoriteQuotesToLocalStorage(),
  randomQuotesHistory: [],
}
