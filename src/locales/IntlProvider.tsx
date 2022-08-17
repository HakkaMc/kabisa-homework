import React, { useMemo } from 'react'
import { IntlProvider as IntlProviderComponent } from 'react-intl'

import { DEFAULT_LANGUAGE } from '../constants/mix'
import { useSelector } from '../redux'
import { shortLanguage } from '../utils'
import { dictionary } from './messages'

interface Props {
  children: React.ReactNode
}

export const IntlProvider = ({ children }: Props) => {
  const language = useSelector((state) => state.App.language)

  const messages = useMemo(() => {
    const languagePart = shortLanguage(language)

    return dictionary[languagePart] || dictionary[DEFAULT_LANGUAGE] || {}
  }, [language])

  return (
    <IntlProviderComponent
      defaultLocale={DEFAULT_LANGUAGE}
      locale={language}
      messages={messages}
    >
      {children}
    </IntlProviderComponent>
  )
}
