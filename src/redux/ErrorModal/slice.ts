import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ErrorModalError } from '../../types/redux'
import { initialState } from './model'

export const ErrorModalSlice = createSlice({
  initialState,
  name: 'ErrorModal',
  reducers: {
    addError: (state, { payload }: PayloadAction<ErrorModalError>) => {
      state.errors.push(payload)
    },
    removeError: (state) => {
      if (state.errors.length) {
        state.errors.shift()
      }
    },
  },
})
