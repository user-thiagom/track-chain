import { Box, Spinner, Text } from 'grommet'
import React from 'react'

function WaitSpinner({ani = true, fill = false}) {
  return (
    <Box
        align='center'
        justify='center'
        height='100vh'
        animation= {ani ? 'pulse' : false}
        background='dark-1'
        fill={fill ? 'horizontal' : false}
      >
        <Text size='2xl' margin='medium'>Espere um momento</Text>
        <Spinner message="Carregando nesse carai" color='accent-1' size='large' />
      </Box>
  )
}

export default WaitSpinner