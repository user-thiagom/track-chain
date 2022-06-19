import { Box } from 'grommet'
import React from 'react'
import CardTrackingInfo from '../CardTrackingInfo/'

function index({contract}) {
  return (
    <Box
    wrap
    direction='row'
    justify='center'
    align='center'
    fill='horizontal'
    overflow='auto'
    pad={{bottom:'small'}}
    >
        {contract.map((history) => {
            return <CardTrackingInfo data={history} />
        })}
    </Box>
  )
}

export default index