import { Box, Text } from 'grommet'
import React from 'react'

function ProductShippingSection({ contract }) {
    const ultimoContrato = contract[0]

    return (
        <Box //Container
        align="center"
        justify="center"
        direction="row"
        width="50vw"
        height="55vh"
        elevation="large"
        gap="medium"
        pad="medium"
        round='medium'
        animation='fadeIn'
        >
            <Box //Container da primeira coluna
            align="center"
            justify="center"
            direction="column"
            height='50vh'
            gap="medium"
            >
                <Box //Card 1
                align="center"
                justify="start"
                direction="row"
                elevation="large"
                width="25vw"
                height="small"
                gap="large"
                round='medium'
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
                            <Text size="large">
                                Tipo
                            </Text>
                            <Text size="xlarge" weight="bold">
                                {ultimoContrato.produto.tipo}
                            </Text>
                        </Box>

                        <Box
                        align="start"
                        justify="center"
                        >
                            <Text size="large">
                                Pressão
                            </Text>
                            <Text size="xlarge" weight="bold">
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
                            <Text size="large">
                                Pureza
                            </Text>
                            <Text size="xlarge" weight="bold">
                                {ultimoContrato.produto.purezaPorcen}%
                            </Text>
                        </Box>

                        <Box
                        align="start"
                        justify="center"
                        >
                            <Text size="large">
                                Temperatura
                            </Text>
                            <Text size="xlarge" weight="bold">
                                {ultimoContrato.produto.temperatura} °C
                            </Text>
                        </Box>
                    </Box>
                </Box>

                <Box //Card 2
                align="start"
                justify="center"
                direction="column"
                elevation="large"
                height="small"
                width="25vw"
                round='medium'
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
                            <Text size="large">
                                Identificador do transporte
                            </Text>
                            <Text size="xlarge" weight="bold">
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
                            <Text size="large">
                                Tipo de veiculo
                            </Text>
                            <Text size="xlarge" weight="bold">
                                {ultimoContrato.entrega.transporte.tipoVeiculo}
                            </Text>
                        </Box>

                        <Box
                        align="start"
                        justify="center"
                        >
                            <Text size="large">
                                Emissão
                            </Text>
                            <Text size="xlarge" weight="bold">
                                {parseFloat(ultimoContrato.entrega.transporte.emissaoPorKm).toFixed(2)} Kg/Km
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box //Container Segunda Coluna
            align="start"
            justify="center"
            direction="column"
            height="43vh"
            elevation="medium"
            gap="medium"
            round='medium'
            pad={{ "left": "medium" }}
            width="25vw"
            >
                <Box
                align="start"
                justify="center"
                >
                    <Text size="large">
                        Volume de H2 gerado por hora
                    </Text>
                    <Text size="xlarge" weight="bold">
                        {ultimoContrato.produto.producao.volumeGeradoHr} m³
                    </Text>
                </Box>

                <Box
                align="start"
                justify="center"
                >
                    <Text size="large">
                        Energia consumida para compressão
                    </Text>
                    <Text size="xlarge" weight="bold">
                        {ultimoContrato.produto.producao.energiaConsumidaEmMJ} MJ
                    </Text>
                </Box>

                <Box
                align="start"
                justify="center"
                >
                    <Text size="large">
                        Eficiência
                    </Text>
                    <Text size="xlarge" weight="bold">
                        80%
                    </Text>
                </Box>

                <Box
                align="start"
                justify="center"
                >
                    <Text size="large">
                        Fonte de energia usada na compressão
                    </Text>
                    <Text size="xlarge" weight="bold">
                        {ultimoContrato.produto.producao.fonteEnergiaPProducao}
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default ProductShippingSection