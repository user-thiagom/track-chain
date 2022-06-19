import { Box, dark, Spinner, Text } from 'grommet'
import React from 'react'

function WaitSpinner({ani = false, fill = false, wid = 'auto', round = false, back='dark-1'}) {
  return (
    <Box
        align='center'
        justify='center'
        height='100vh'
        animation= {ani ? 'pulse' : ani}
        background={back}
        fill={fill ? 'horizontal' : false}
        width={wid}
        round={round ? round : false}
      >
        <Text size='2xl' margin='medium'>Espere um momento</Text>
        <Spinner message="Carregando nesse carai" color='accent-1' size='large' />
      </Box>
  )
}

export default WaitSpinner