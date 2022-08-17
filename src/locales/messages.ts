import { enhanceMessages } from './utils'

const messagesTree = {
  about: {
    featureSummary: {
      title: {
        cs: 'Souhrn funkcionalit',
        en: 'Feature summary',
      },
    },
    specialFeatures: {
      title: {
        cs: 'Technologické specialitky',
        en: 'Special tech features',
      },
    },
    todos: {
      title: {
        cs: 'Nedostatky',
        en: 'TODOs',
      },
    },

    usedTechs: {
      title: {
        cs: 'Použité technologie',
        en: 'Used technologies',
      },
    },
  },
  common: {
    close: {
      cs: 'Zavřít',
      en: 'Close',
    },
  },
  errorModal: {
    closeBtn: {
      cs: 'Rozumím',
      en: 'OK',
    },
  },
  favoriteQuotes: {
    noQuotes: {
      cs: 'Nemáte žádné oblíbené citáty',
      en: 'No favorite quotes so far',
    },
  },
  leftPanel: {
    about: {
      cs: 'O aplikaci',
      en: 'About',
    },
    dashboard: {
      cs: 'Domů',
      en: 'Dashboard',
    },
    favorites: {
      cs: 'Oblíbené',
      en: 'Favorites',
    },
    title: {
      cs: 'Citáty',
      en: 'Quotes',
    },
  },
  quoteActions: {
    addToFavoritesAria: {
      cs: 'Přidat citát do oblíbených',
      en: 'Add quote to favorites',
    },
    findSimilar: {
      cs: 'Najít podobné',
      en: 'Find similar',
    },
    findSimilarAria: {
      cs: 'Najít podobné citáty',
      en: 'Find similar quotes',
    },
  },
  randomQuotes: {
    autoNextQuote: {
      cs: 'Automaticky načíst další',
      en: 'Slideshow',
    },
    nextRandomQuote: {
      cs: 'Další náhodný citát',
      en: 'Next random quote',
    },
    prevQuote: {
      cs: 'Předchozí citát',
      en: 'Previous quote',
    },
  },
  similarQuotesModal: {
    loadingQuotes: {
      cs: 'Vyhledávám citáty...',
      en: 'Loading quotes...',
    },
    title: {
      cs: 'Citáty s podobnou délkou',
      en: 'Quotes with similar length',
    },
  },
}

export const { messages, dictionary } =
  enhanceMessages<typeof messagesTree>(messagesTree)
