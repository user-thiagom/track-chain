import { Box, Button, Card, CardBody, CardFooter, CardHeader, Layer } from 'grommet'
import React, { useEffect, useState } from 'react'
import CardTrackingInfo from '../../Components/CardTrackingInfo'
import WaitSpinner from '../../Components/WaitSpinner'
import { api } from '../../Services/api'

function TrackingOverlay({ id, handle }) {
    const [contract, setContract] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            api.get("contratoId").then(response => {
                console.log(response.data)
                setLoading(false)
                setContract(response.data)
            })
        }, 2000)
    }, [])

    if (loading) {
        return (
            <Layer
                full='horizontal'
                position='center'
                margin={{
                    horizontal: 'xlarge'
                }}
            >
                <Box
                    direction='column'
                    justify='center'
                    align='center'
                    height='large'
                    background='brand'
                >
                    <WaitSpinner ani={false} fill />
                </Box>
            </Layer>
        )
    }

    return (
        <Layer
            onEsc={() => { handle(false) }}
            onClickOutside={() => { handle(false) }}
            full='horizontal'
            position='center'
            margin={{
                horizontal: 'xlarge'
            }}
            className='overlay'
        >
            <Box
                direction='row'
                justify='between'
                align='center'
                height='large'
                background='brand'
            >
                <Box
                    background='neutral-1'
                    direction='column'
                    justify='center'
                    align='start'
                    height='100%'
                    gap='xsmall'
                    pad='small'
                >
                    {contract.map((history)=>{
                        return <CardTrackingInfo data={history}/>
                    })}

                </Box>
                <Box
                    direction='row'
                    justify='start'
                    align='center'
                    gap='small'
                    fill='vertical'
                >
                    <Button label='Fechar' onClick={() => handle(false)} hoverIndicator />
                    <Button label='Relatório de Poluição' primary hoverIndicator />
                </Box>

            </Box>

        </Layer>
    )
}

export default TrackingOverlay