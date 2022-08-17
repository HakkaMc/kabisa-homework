import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import Dialog from '@mui/material/Dialog'
import React, { useCallback } from 'react'
import { useIntl } from 'react-intl'

import { messages } from '../../locales'
import { dispatchedActions, useSelector } from '../../redux'

const msgs = messages.errorModal

export const ErrorModal = () => {
  const { formatMessage } = useIntl()

  const errors = useSelector((state) => state.ErrorModal.errors)

  const handleCloseDialog = useCallback(() => {
    if (errors.length === 1) {
      window.location.reload()
    } else {
      dispatchedActions.ErrorModal.removeError()
    }
  }, [errors])

  const error = errors?.[0]

  return (
    <Dialog
      fullWidth
      data-testId="error-dialog"
      maxWidth="lg"
      open={!!errors.length}
      onClose={handleCloseDialog}
    >
      <DialogTitle>{error?.title}</DialogTitle>
      {!!error?.content && <DialogContent>{error.content}</DialogContent>}
      <DialogActions>
        <Button onClick={handleCloseDialog}>
          {formatMessage(msgs.closeBtn)}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
