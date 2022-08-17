export {
  saveFavoriteQuotesToLocalStorage,
  getFavoriteQuotesToLocalStorage,
} from './localStorage'

export { findSimilarQuotes } from './api'

export const shortLanguage = (longLanguage: string) =>
  longLanguage.split('-')?.[0]
