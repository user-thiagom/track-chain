import { Box, Card, CardBody, CardFooter, CardHeader, Text } from 'grommet'
import { CheckboxSelected, Package } from 'grommet-icons'
import React from 'react'
import './index.css'

function CardGroup({ data, clickCard }) {
    return (
        <>
            {
                data.map((contrato) => {

                    return (
                        <Card onClick={()=>clickCard(contrato)} animation='fadeIn' className='card' height='140px' width="xlarge" background="light-1" margin={{top: 'small'}} elevation='medium' direction='row'>
                            <CardHeader pad='40px' background={contrato.situacao == 'Entregue' ? 'status-ok' : 'status-warning'}>
                            </CardHeader>

                            <CardBody direction='column' pad={{left:'small'}}>
                                <Box fill='vertical' direction='row' gap='large' margin={{top:'small'}}>
                                    <Box width='small'>
                                        <Text className='txtTitle'>KEY</Text>
                                        <Text className='txtContent'>{contrato.key}</Text>
                                    </Box>
                                    <Box width='medium'>
                                        <Text className='txtTitle'>Responsável pela entrega</Text>
                                        <Text className='txtContent'>{contrato.responEntrega}</Text>
                                    </Box>
                                    <Box>
                                        <Text className='txtTitle'>Destinatário</Text>
                                        <Text className='txtContent'>{contrato.destinatario}</Text>
                                    </Box>
                                </Box>
                                <Box fill='vertical' gap='large' direction='row'>
                                    <Box width='small'>
                                        <Text className='txtTitle'>Situação</Text>
                                        <Text className='txtContent'>{contrato.situacao}</Text>
                                    </Box>
                                    <Box>
                                        <Text className='txtTitle'>Ultimo Endereço</Text>
                                        <Text className='txtContent'>{contrato.ultimoEndereco}</Text>
                                    </Box>
                                </Box>
                            </CardBody>

                            <CardFooter align='start' margin={{top:'small',right: 'small'}}>
                                {
                                    contrato.situacao == 'Entregue' ?
                                    <CheckboxSelected/>:
                                    <Package/>
                                }
                            </CardFooter>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default CardGroup