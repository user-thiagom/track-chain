import { Button, Layer } from 'grommet'
import React from 'react'

function TrackingOverlay({id,handle}) {

    return (
        <Layer
        onEsc={()=>{handle(false)}}
        onClickOutside={()=>{handle(false)}}
        full={true}
        margin='xlarge'
        >
            <div>
                <Button label='Fechar' alignSelf='start'/>
                <Button label='Relatório de Poluição' alignSelf='end' primary/>
            </div>
            
        </Layer>
    )
}

export default TrackingOverlay