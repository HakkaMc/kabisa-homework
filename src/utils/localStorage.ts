import { MyQuotes } from '../types/redux'

export const saveFavoriteQuotesToLocalStorage = (
  favoriteQuotes: MyQuotes['favoriteQuotes']
) => {
  window.localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotes))
}

export const getFavoriteQuotesToLocalStorage = () => {
  let ret: MyQuotes['favoriteQuotes'] = {}
  const favoriteQuotesRaw = window.localStorage.getItem('favoriteQuotes')
  if (favoriteQuotesRaw) {
    try {
      ret = JSON.parse(favoriteQuotesRaw)
    } catch (error) {
      console.error(error)
    }
  }

  return ret
}
