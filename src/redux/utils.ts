import { EnhancedStore } from '@reduxjs/toolkit'

type ReduxActions = { [k: string]: (...params: any) => void }

type Actions = { [k: string]: ReduxActions }

const mapDispatch = <T = ReduxActions>(actions: T, store: EnhancedStore): T =>
  Object.assign(
    {},
    ...Object.entries(actions).map(([key, action]) => ({
      // @ts-ignore
      [key]: (...params: any) => store.dispatch(action(...params)),
    }))
  )

export const mapDispatchToActions = <T = Actions>(
  actions: T,
  store: EnhancedStore
): T =>
  Object.assign(
    {},
    ...Object.entries(actions).map(([reducer, reducerActions]) => ({
      [reducer]: mapDispatch(reducerActions, store),
    }))
  )
