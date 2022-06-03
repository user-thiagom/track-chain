import { Box, DataTable, Text } from 'grommet'
import React, { useState } from 'react'

function Tabela({ dados, gridArea, clickRow }) {
    const [dadosT, setDadosT] = useState(dados)

    return (
        <Box gridArea={gridArea} alignSelf='center'>
            <DataTable
                columns={[
                    {
                        property: "id",
                        header: <Text>Id</Text>,
                        primary: true
                    },
                    {
                        property: "localRecebimento",
                        header: <Text>Ultima atualização</Text>
                    },
                    {
                        property: "statusEntrega",
                        header: <Text>Status</Text>
                    }
                ]}
                data={dadosT}
                sortable={true}
                onClickRow={({datum})=>{clickRow(datum)}}
                background='dark-2'
                alignSelf='center'
                verticalAlign='top'
            />
        </Box>
    )
}

export default Tabela