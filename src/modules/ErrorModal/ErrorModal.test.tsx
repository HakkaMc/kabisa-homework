import { render } from '@testing-library/react'
import React from 'react'
import * as intl from 'react-intl'

import * as redux from '../../redux/store'
import { ErrorModal } from './ErrorModal'

describe('ErrorModal', () => {
  beforeEach(() => {
    jest.spyOn(intl, 'useIntl').mockImplementation(
      jest.fn(() => ({
        formatMessage: jest.fn(() => undefined),
      }))
    )
  })

  it('No errors - modal dialog is not renderer', () => {
    const useSelectorMock = () => []
    jest.spyOn(redux, 'useSelector').mockImplementation(useSelectorMock)

    const result = render(<ErrorModal />)

    expect(result.queryByTestId('error-dialog')).toBeFalsy()
  })

  it('Some errors - modal dialog is not renderer', () => {
    const useSelectorMock = () => [{}]
    jest.spyOn(redux, 'useSelector').mockImplementation(useSelectorMock)

    const result = render(<ErrorModal />)

    expect(result.queryByTestId('error-dialog')).toBeTruthy()
  })
})
