export interface App {
  isMobileLeftPanelOpened: boolean
  language: string
}

export interface MyQuotes {
  favoriteQuotes: Record<string, number>
  randomQuotesHistory: Array<number>
}

export interface ErrorModalError {
  content?: string
  title: string
}

export interface ErrorModal {
  errors: Array<ErrorModalError>
}
