import { Box, Card, CardBody, CardFooter, CardHeader, Text, Tip } from 'grommet'
import { Test } from 'grommet-icons'
import React from 'react'
import './index.css'

function CardTrackingInfo({ data }) {


    return (
        <Card height="small" width="500px" background="light-1">
            <CardHeader direction='row' justify='center' gap='xxsmall' pad="xsmall" background='brand'>
                <Text size='16px'>
                    {data.timestamp.slice(0, 16).replace('T', ' ').replace(/-/g, '/')} |
                </Text>
                <Text size='16px'>
                    Em transporte para: {data.entrega.localEntrega}
                </Text>
            </CardHeader>

            <CardBody background='accent-1' gap='xxsmall'>
                <Box border='all' >
                    <Text className='txtCardBody' size='16px'>
                        Saiu de {data.entrega.localRecebimento.toUpperCase()}
                    </Text>
                    <Text className='txtCardBody' size='16px'>
                        Para {data.entrega.localEntrega.toUpperCase()}
                    </Text>
                    <Text className='txtCardBody' size='16px'>
                        Distância média: {data.entrega.distanciaMedia}
                    </Text>
                </Box>

                <Box border='all'>
                    <Text className='txtCardBody' size='16px'>
                        Transportadora: {data.entrega.responsavelTransporte.nome}
                    </Text>
                    <Text className='txtCardBody' size='16px'>
                        Tipo de Veiculo: {data.entrega.transporte.tipoVeiculo}
                    </Text>
                    <Text className='txtCardBody' size='16px'>
                        Emissão média de carbono por KM: {data.entrega.transporte.emissaoPorKm}
                    </Text>
                </Box>

            </CardBody>

            <CardFooter justify='center' background="light-2">
                <Text size='16px'>
                    Transaction id: <Tip
                        content={data.transactionId}
                    >
                        {data.transactionId.slice(0, 6)}
                    </Tip>
                </Text>
            </CardFooter>
        </Card>
    )
}

export default CardTrackingInfo