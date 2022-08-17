import { Box, LinearProgress } from '@mui/material'
import { blue } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'

interface Props {
  goToNextQuote: () => void
  quoteId?: number
  timeout: number
}

export const Progress = ({ quoteId, timeout, goToNextQuote }: Props) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const step = 300 // ms
    let counter = 1
    let refTimeout: ReturnType<typeof setTimeout>

    const refInterval = setInterval(() => {
      const percentualValue = Math.min((100 / timeout) * (counter * step), 100)

      setValue(percentualValue)

      if (percentualValue >= 100) {
        clearInterval(refInterval)
        refTimeout = setTimeout(goToNextQuote, 500)
      }

      counter += 1
    }, step)

    setValue(0)

    return () => {
      clearInterval(refInterval)
      clearTimeout(refTimeout)
      setValue(0)
    }
  }, [quoteId, setValue, goToNextQuote, timeout])

  return (
    <Box bgcolor={blue[100]} sx={{ height: '4px' }}>
      {value > 0 && (
        <LinearProgress key={quoteId} value={value} variant="determinate" />
      )}
    </Box>
  )
}
