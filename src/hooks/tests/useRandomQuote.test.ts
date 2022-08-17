import { act, renderHook } from '@testing-library/react-hooks'
import React from 'react'

import { quotesApiEndpoints } from '../../api'
import * as redux from '../../redux/store'
import { dispatchedActions } from '../../redux/store'
import { useRandomQuote } from '..'

describe('useRandomQuote', () => {
  let getRandomQuoteMock

  beforeEach(() => {
    getRandomQuoteMock = jest.fn(() => ({
      then: jest.fn(),
    }))

    jest
      .spyOn(quotesApiEndpoints, 'getRandomQuote')
      .mockImplementation(getRandomQuoteMock)
  })

  it('quotesApiEndpoints.getRandomQuote is called after hook mount', () => {
    const useSelectorMock = () => []
    jest.spyOn(redux, 'useSelector').mockImplementation(useSelectorMock)

    const { result } = renderHook(() => useRandomQuote())

    expect(getRandomQuoteMock).toHaveBeenCalled()
    expect(result.current.actualQuote).toEqual(undefined)
  })

  it('dispatchedActions.MyQuotes.removeLastQuoteFromRandomHistory is called', () => {
    const useSelectorMock = () => [5, 10]
    jest.spyOn(redux, 'useSelector').mockImplementation(useSelectorMock)

    const removeLastQuoteFromRandomHistoryMock = jest.fn()
    jest
      .spyOn(dispatchedActions.MyQuotes, 'removeLastQuoteFromRandomHistory')
      .mockImplementation(removeLastQuoteFromRandomHistoryMock)

    const { result } = renderHook(() => useRandomQuote())

    act(() => {
      result.current.goToPreviousQuote()
    })

    expect(removeLastQuoteFromRandomHistoryMock).toHaveBeenCalled()
  })

  it('dispatchedActions.MyQuotes.addRandomQuoteToHistory is called', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(jest.fn(() => [false, jest.fn(() => undefined)]))
      .mockImplementationOnce(
        jest.fn(() => [{ id: 'id1' }, jest.fn(() => undefined)])
      )
      .mockImplementationOnce(
        jest.fn(() => [{ id: 'id2' }, jest.fn(() => undefined)])
      )
      .mockImplementationOnce(
        jest.fn(() => [{ id: 'id3' }, jest.fn(() => undefined)])
      )

    const useSelectorMock = () => [5, 10]
    jest.spyOn(redux, 'useSelector').mockImplementation(useSelectorMock)

    const addRandomQuoteToHistoryMock = jest.fn()
    jest
      .spyOn(dispatchedActions.MyQuotes, 'addRandomQuoteToHistory')
      .mockImplementation(addRandomQuoteToHistoryMock)

    const { result } = renderHook(() => useRandomQuote())

    act(() => {
      result.current.goToNextQuote()
    })

    expect(addRandomQuoteToHistoryMock).toHaveBeenCalled()
  })

  it('actualQuote is not undefined', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(jest.fn(() => [false, jest.fn(() => undefined)]))
      .mockImplementationOnce(
        jest.fn(() => [{ id: 'id1' }, jest.fn(() => undefined)])
      )
      .mockImplementationOnce(
        jest.fn(() => [{ id: 'id2' }, jest.fn(() => undefined)])
      )
      .mockImplementationOnce(
        jest.fn(() => [{ id: 'id3' }, jest.fn(() => undefined)])
      )

    const useSelectorMock = () => [5, 10]
    jest.spyOn(redux, 'useSelector').mockImplementation(useSelectorMock)

    const { result } = renderHook(() => useRandomQuote())

    expect(result.current.actualQuote).toEqual(
      expect.objectContaining({ id: 'id1' })
    )
  })
})
