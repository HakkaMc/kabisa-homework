import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux'

import { AppSlice } from './App/slice'
import { ErrorModalSlice } from './ErrorModal/slice'
import { MyQuotesSlice } from './MyQuotes/slice'
import { mapDispatchToActions } from './utils'

export const reduxActions = {
  [AppSlice.name]: AppSlice.actions,
  [MyQuotesSlice.name]: MyQuotesSlice.actions,
  [ErrorModalSlice.name]: ErrorModalSlice.actions,
}

export const store = configureStore({
  reducer: {
    [AppSlice.name]: AppSlice.reducer,
    [MyQuotesSlice.name]: MyQuotesSlice.reducer,
    [ErrorModalSlice.name]: ErrorModalSlice.reducer,
  },
})

export const dispatchedActions = mapDispatchToActions<typeof reduxActions>(
  reduxActions,
  store
)

export type ReduxState = ReturnType<typeof store.getState>

export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector

setupListeners(store.dispatch)
