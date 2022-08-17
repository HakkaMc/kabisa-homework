import { Box } from '@mui/material'
import React from 'react'

import { FeatureSummary } from './modules/FeatureSummary'
import { SpecialFeatures } from './modules/SpecialFeatures'
import { Todos } from './modules/Todos'
import { UsedTechs } from './modules/UsedTechs'

export const About = () => {
  return (
    <>
      <FeatureSummary />
      <Box mt={4}>
        <UsedTechs />
      </Box>
      <Box mt={4}>
        <SpecialFeatures />
      </Box>
      <Box mt={4}>
        <Todos />
      </Box>
    </>
  )
}
