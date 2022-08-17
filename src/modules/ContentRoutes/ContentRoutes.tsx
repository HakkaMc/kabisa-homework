import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

import { About, FavoriteQuotes, PageNotFound, RandomQuotes } from '..'

export const ContentRoutes = () => (
  <Routes>
    <Route element={<RandomQuotes />} path="/" />
    <Route element={<About />} path="/about" />
    <Route element={<FavoriteQuotes />} path="/favorites" />
    <Route element={<PageNotFound />} path="*" />
  </Routes>
)
