import React, { useState } from 'react'
import { Box, Meter, Stack, Text } from 'grommet'
import { CheckboxSelected, CircleInformation } from 'grommet-icons'
import { PieChart } from '../Charts/PieChart'
import {fromJsonToChartData} from '../../Pages/DashBoardPage'
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
                margin={{bottom:'small'}}
            >
                <Box //Card 1
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
                                SITUAÇÃO
                            </Text>
                            <CheckboxSelected />
                        </Box>
                        <Text size="large" weight="bold">
                            {recentAtt.entrega.foiEntregue ? "ENTREGUE" : "EM TRANSPORTE"}
                        </Text>
                        <Box>
                            <Text size="medium">
                                Endereço atual
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
                            DISTÂNCIA PERCORRIDA
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

                    <PieChart chartData={energiaUsada} text='FONTES DE ENERGIA  USADAS NA PRODUÇÃO'/>

                </Box>

                <Box //Card 4
                    justify='center'
                    align='center'
                    height='25vh'
                    width='16vw'
                    round='medium'
                    elevation='medium'
                >

                    <PieChart chartData={tipoVeiculos} text='TIPO DE VEICULO UTILIZADO NO TRANSPORTE'/>

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
                    width='16vw'
                    round='medium'
                    elevation='medium'
                >

                    <PieChart chartData={empresas} text='TRANSPORTADORAS'/>

                </Box>

                <Box //Card 2
                    justify='center'
                    align='center'
                    height='25vh'
                    width='20vw'
                    round='medium'
                    elevation='medium'
                >
                    <BarChart chartData={emissaoPorVeiculo} text='EMISSÃO DE POLUIÇÃO POR VEÍCULO'/>
                </Box>

                <Box //Card 3
                    justify='center'
                    align='center'
                    height='25vh'
                    width='20vw'
                    round='medium'
                    elevation='medium'
                >
                    <BarChart chartData={emissaoPorEmpresa} text='EMISSÃO DE POLUIÇÃO POR TRANSPORTADORA'/>
                </Box>
            </Box>
        </>
    )
}

export default IndividualReportSection