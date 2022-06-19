import { Box, Card, CardBody, CardFooter, CardHeader, Text, Tip } from 'grommet'
import React from 'react'
import './index.css'

function CardTrackingInfo({ data }) {


    return (
        <Card 
        height="18vh"
        width="50vw"
        elevation='medium'
        animation={{type:'slideUp', delay:4, duration:2000, size:'large'}}
        >
            <CardBody
            pad="small"
            direction="column"
            justify="center"
            align="start"
            >
                <Box
                align="center"
                justify="between"
                direction="row"
                gap="xxsmall"
                fill="horizontal"
                >
                    <Box
                    align="center"
                    justify="center"
                    direction="row"
                    gap='xsmall'
                    >
                        <Box
                        align="center"
                        justify="center"
                        width="15px"
                        height="15px"
                        round="full"
                        background={data.entrega.foiEntregue ? 'status-ok' : 'status-warning'}
                        />

                        <Text size="small">
                            {data.transactionId}
                        </Text>
                    </Box>

                    <Text size="small" truncate={false}>
                        {data.timestamp.slice(0, 16).replace('T', ' ').replace(/-/g, '/')}
                    </Text>
                </Box>

                <Box
                align="center"
                justify="start"
                direction="row"
                fill="horizontal"
                gap="large"
                >
                    <Box
                    align="stretch"
                    justify="center"
                    direction="column"
                    width="small"
                    >
                        <Text size="small">
                            Responsável Pela entrega
                        </Text>
                        <Text size="medium" weight="bold">
                            {data.entrega.responsavelTransporte.nome}
                        </Text>
                    </Box>

                    <Box
                    align="stretch"
                    justify="center"
                    width="30vw"
                    
                    >
                        <Text size="small">
                            Destino
                        </Text>

                        <Text size="medium" weight="bold">
                            {data.entrega.localEntrega}
                        </Text>
                    </Box>
                </Box>

                <Box
                align="center"
                justify="start"
                direction="row"
                fill="horizontal"
                gap="large"
                >
                    <Box
                    align="stretch"
                    justify="center"
                    direction="column"
                    width="small"
                    >
                        <Text size="small">
                            Distancia média
                        </Text>
                        <Text size="medium" weight="bold">
                            {data.entrega.distanciaMedia}
                        </Text>
                    </Box>

                    <Box 
                    align="stretch"
                    justify="center"
                    width="30vw"
                    >
                        <Text size="small">
                            Local recebimento
                        </Text>
                        <Text size="medium" weight="bold">
                            {data.entrega.localRecebimento}
                        </Text>
                    </Box>
                </Box>
            </CardBody>
        </Card>
    )
}

export default CardTrackingInfo