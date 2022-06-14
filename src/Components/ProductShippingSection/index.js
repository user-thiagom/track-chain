import { Box, Text } from 'grommet'
import React from 'react'

function index({ contract }) {
    const ultimoContrato = contract[0]

    return (
        <Box
        align="center"
        justify="center"
        direction="row"
        width="large"
        height="50vh"
        elevation="large"
        gap="medium"
        pad="medium"
        round='medium'
        animation='fadeIn'
        >
            <Box align="center"
            justify="center"
            direction="column"
            width="medium"
            height='medium'
            gap="medium"
            >
                <Box
                align="center"
                justify="start"
                direction="row"
                elevation="large"
                width="medium"
                height="small"
                gap="large"
                pad={{ "left": "medium" }}
                >
                    <Box
                    align="start"
                    justify="center"
                    direction="column"
                    >
                        <Box
                        align="start"
                        justify="center"
                        >
                            <Text size="medium">
                                Tipo
                            </Text>
                            <Text size="large" weight="bold">
                                {ultimoContrato.produto.tipo}
                            </Text>
                        </Box>

                        <Box
                        align="start"
                        justify="center"
                        >
                            <Text size="medium">
                                Pressão
                            </Text>
                            <Text size="large" weight="bold">
                                {ultimoContrato.produto.pressaoTanqueEmMPa} MPa
                            </Text>
                        </Box>
                    </Box>

                    <Box
                    align="start"
                    justify="center"
                    direction="column"
                    >
                        <Box
                        align="start"
                        justify="center"
                        >
                            <Text size="medium">
                                Pureza
                            </Text>
                            <Text size="large" weight="bold">
                                {ultimoContrato.produto.purezaPorcen}%
                            </Text>
                        </Box>

                        <Box
                        align="start"
                        justify="center"
                        >
                            <Text size="medium">
                                Temperatura
                            </Text>
                            <Text size="large" weight="bold">
                                {ultimoContrato.produto.temperatura} °C
                            </Text>
                        </Box>
                    </Box>
                </Box>

                <Box
                align="start"
                justify="center"
                direction="column"
                elevation="large"
                height="small"
                width="medium"
                pad={{ "left": "medium" }}
                >
                    <Box
                    align="start"
                    justify="center"
                    direction="column"
                    >
                        <Box
                        align="start"
                        justify="center"
                        >
                            <Text size="medium">
                                Identificador do transporte
                            </Text>
                            <Text size="large" weight="bold">
                                {ultimoContrato.entrega.transporte.identificadorVeiculo.toUpperCase()}
                            </Text>
                        </Box>
                    </Box>

                    <Box
                    align="start"
                    justify="start"
                    direction="row"
                    gap="large"
                    >
                        <Box
                        align="start"
                        justify="center"
                        >
                            <Text size="medium">
                                Tipo de veiculo
                            </Text>
                            <Text size="large" weight="bold">
                                {ultimoContrato.entrega.transporte.tipoVeiculo}
                            </Text>
                        </Box>

                        <Box
                        align="start"
                        justify="center"
                        >
                            <Text size="medium">
                                Emissão
                            </Text>
                            <Text size="large" weight="bold">
                                {ultimoContrato.entrega.transporte.emissaoPorKm} Kg/Km
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
            align="start"
            justify="center"
            direction="column"
            height="medium"
            elevation="medium"
            gap="medium"
            pad={{ "left": "medium" }}
            width="medium"
            >
                <Box
                align="start"
                justify="center"
                >
                    <Text size="medium">
                        Volume de H2 gerado por hora
                    </Text>
                    <Text size="large" weight="bold">
                        {ultimoContrato.produto.producao.volumeGeradoHr} m³
                    </Text>
                </Box>

                <Box
                align="start"
                justify="center"
                >
                    <Text size="medium">
                        Energia consumida para compressão
                    </Text>
                    <Text size="large" weight="bold">
                        {ultimoContrato.produto.producao.energiaConsumidaEmMJ} MJ
                    </Text>
                </Box>

                <Box
                align="start"
                justify="center"
                >
                    <Text size="medium">
                        Eficiência
                    </Text>
                    <Text size="large" weight="bold">
                        80%
                    </Text>
                </Box>

                <Box
                align="start"
                justify="center"
                >
                    <Text size="medium">
                        Fonte de energia usada na compressão
                    </Text>
                    <Text size="large" weight="bold">
                        {ultimoContrato.produto.producao.fonteEnergiaPProducao}
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default index