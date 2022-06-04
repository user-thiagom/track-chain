import { Box, Spinner, Text } from 'grommet'
import React from 'react'

function WaitSpinner() {
  return (
    <Box
        align='center'
        justify='center'
        height='100vh'
        animation='pulse'
        background='dark-1'
      >
        <Text size='2xl' margin='medium'>Espere um momento</Text>
        <Spinner message="Carregando nesse carai" color='accent-1' size='large' />
      </Box>
  )
}

export default WaitSpinner