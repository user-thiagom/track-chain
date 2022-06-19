import { Box } from 'grommet'
import React, { useState } from 'react'
import CardGroup from '../CardGroup'

function TrackingCards({ dados, clickRow }) {
    const [dadosT, setDadosT] = useState(dados)

    return (
        <Box wrap direction='row' justify='center' align='center' fill='horizontal' overflow='auto'  pad={{bottom:'small'}}>
            <CardGroup data={dadosT} clickCard={clickRow}/>
        </Box>
    )
}

export default TrackingCards