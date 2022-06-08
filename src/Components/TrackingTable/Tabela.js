import { Box, DataTable, Text } from 'grommet'
import React, { useState } from 'react'

function Tabela({ dados, gridArea, clickRow }) {
    const [dadosT, setDadosT] = useState(dados)

    return (
        <Box wrap direction='row' justify='center' align='center' overflow='auto' fill='horizontal'>
            <DataTable
                columns={[
                    {
                        property: "key",
                        header: <Text>Key</Text>,
                        primary: true,
                        
                    },
                    {
                        property: "localRecebimento",
                        header: <Text>Ultima atualização</Text>,
                    },
                    {
                        property: "statusEntrega",
                        header: <Text>Status</Text>
                    }
                ]}
                border={{
                    color: 'brand',
                    side: 'all',
                    size: '1px'
                }}
                background={{
                    header: 'brand',
                    body: 'light-5'
                }}
                data={dadosT}
                sortable={true}
                onClickRow={({ datum }) => { clickRow(datum) }}
                alignSelf='center'
                verticalAlign='middle'
                size='medium'
                className='tracking-table'
            />
        </Box>
    )
}

export default Tabela