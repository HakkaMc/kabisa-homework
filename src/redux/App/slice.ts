import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './model'

export const AppSlice = createSlice({
  initialState,
  name: 'App',
  reducers: {
    setLanguage: (state, { payload }: PayloadAction<string>) => {
      state.language = payload
    },
    toggleIsMobileLeftPanelOpened: (state, _: PayloadAction) => {
      state.isMobileLeftPanelOpened = !state.isMobileLeftPanelOpened
    },
  },
})
