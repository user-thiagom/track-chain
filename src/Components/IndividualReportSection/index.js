import React, { useState } from 'react'
import { Box, Meter, Stack, Text } from 'grommet'
import { CheckboxSelected, CircleInformation } from 'grommet-icons'
import { PieChart } from '../Charts/PieChart'
import { fromJsonToChartData } from '../../Pages/DashBoardPage'
import { BarChart } from '../Charts/BarChart'
import { LineChart } from '../Charts/LineChart'

function IndividualReportSection({ data, recentAtt }) {
    const [energiaUsada, setEnergiaUsada] = useState(fromJsonToChartData(data.fontesDeEnergiaUsadas))
    const [tipoVeiculos, setTipoVeiculos] = useState(fromJsonToChartData(data.tiposDeVeiculosESuasQtd))
    const [empresas, setEmpresas] = useState(fromJsonToChartData(data.empresasESuasQtd))
    const [emissaoPorVeiculo, setEmissaoPorVeiculo] = useState(fromJsonToChartData(data.emissaoMediaPorVeiculo))
    const [emissaoPorEmpresa, setEmissaoPorEmpresa] = useState(fromJsonToChartData(data.emissaoMediaPorEmpresa))

    return (
        <>
            <Box //Linha 1
                direction='row'
                justify='center'
                align='center'
                gap='small'
                margin={{ bottom: 'small' }}
            >
                <Box //Card 1
                    justify='center'
                    align='start'
                    height='25vh'
                    width='25vw'
                    round='medium'
                    elevation='medium'
                    pad={{ left: 'medium', right: 'medium' }}
                >
                    <Box
                        align="start"
                        justify="center"
                        fill='horizontal'
                        height='15vh'
                        gap='xsmall'

                    >
                        <Box
                            lign="center"
                            fill='horizontal'
                            justify="between"
                            direction="row"

                        >
                            <Text size="medium">
                                SITUA????O
                            </Text>
                            <CheckboxSelected />
                        </Box>
                        <Text size="large" weight="bold">
                            {recentAtt.entrega.foiEntregue ? "ENTREGUE" : "EM TRANSPORTE"}
                        </Text>
                        <Box>
                            <Text size="medium">
                                Endere??o atual
                            </Text>
                            <Text size='large' weight='bold'>
                                {recentAtt.entrega.foiEntregue ? recentAtt.entrega.localEntrega : recentAtt.entrega.localRecebimento}
                            </Text>
                        </Box>

                    </Box>

                </Box>

                <Box //Card 2
                    justify='center'
                    align='center'
                    height='25vh'
                    width='16vw'
                    round='medium'
                    elevation='medium'
                >
                    <Box
                        align="start"
                        justify="center"
                        width='13vw'
                        height='15vh'
                        gap='xsmall'
                    >
                        <Box
                            lign="center"
                            fill='horizontal'
                            justify="between"
                            direction="row"
                        >
                            <Text size="medium">
                                CO2 EMITIDO
                            </Text>
                            <CircleInformation />
                        </Box>

                        <Text size="large" weight="bold">
                            {data.co2TotalEmitido} Kg
                        </Text>

                        <Text size="small">
                            DIST??NCIA PERCORRIDA
                        </Text>

                        <Text size="large" weight="bold">
                            {data.distanciaTotal} Km
                        </Text>
                    </Box>
                </Box>

                <Box //Card 3
                    justify='center'
                    align='center'
                    height='25vh'
                    width='16vw'
                    round='medium'
                    elevation='medium'
                >
                    <Box>
                        <PieChart chartData={tipoVeiculos} text='TIPOS DE VEICULOS UTILIZADOS' fontSize={12}/>

                    </Box>

                </Box>
            </Box>

            <Box //Linha 2
                direction='row'
                justify='center'
                align='center'
                gap='small'
            >


                <Box //Card 1
                    justify='center'
                    align='center'
                    height='25vh'
                    width='28vw'
                    round='medium'
                    elevation='medium'
                >
                    <Box
                        width='75%'
                    >

                        <LineChart chartData={emissaoPorVeiculo} text='EMISS??O DE CO2(Kg/Km) POR VE??CULO' />
                    </Box>
                </Box>

                <Box //Card 3
                    justify='center'
                    align='center'
                    height='25vh'
                    width='28vw'
                    round='medium'
                    elevation='medium'
                >
                    <Box
                        width='75%'
                    >
                        <LineChart chartData={emissaoPorEmpresa} text='EMISS??O DE CO2(Kg/Km) POR TRANSPORTADORA' />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default IndividualReportSection