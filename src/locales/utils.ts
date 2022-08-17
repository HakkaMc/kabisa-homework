import get from 'lodash/get'
import set from 'lodash/set'
import { MessageDescriptor } from 'react-intl'

type Messages<O> = {
  [K in keyof O]: O[K] extends Record<string, string>
    ? MessageDescriptor
    : Messages<O[K]>
}

type Dictionary = Record<string, Record<string, string>>

const dictionary: Dictionary = {}

const enhanceMessagesLoop = (messages: any, path: string, messageTree: any) => {
  const actualObject = path ? get(messageTree, path) : messageTree
  const keys = Object.keys(actualObject)

  keys.forEach((key: string) => {
    const previousFullPath = path ? path : ''
    const fullPath: string = path ? `${path}.${key}` : key

    if (typeof actualObject[key] === 'string') {
      const value: string = actualObject[key]

      if (!dictionary[key]) {
        dictionary[key] = {}
      }

      dictionary[key][previousFullPath] = value

      const message: MessageDescriptor = {
        defaultMessage: value,
        id: previousFullPath,
      }

      if (key === 'en') {
        set(messages, previousFullPath, message)
      }
    } else if (typeof actualObject[key] === 'object') {
      enhanceMessagesLoop(messages, fullPath, messageTree)
    }
  })
}

// Prepare dictionary for react-intl
export const enhanceMessages = <T = unknown>(
  messageTree: any
): { dictionary: Dictionary; messages: Messages<T> } => {
  const messages: any = {}
  enhanceMessagesLoop(messages, '', messageTree)

  return {
    dictionary,
    messages,
  }
}
