import { Meter, Stack, Text } from 'grommet'
import React, { useState } from 'react'

function CircleChart( {data}) {
    const [active, setActive] = useState('');
    let dataMeter = []
    let count = 0

    Object.keys(data).forEach((item)=>{
        dataMeter.push({
            value: data[item],
            label: item,
            color: "graph-".concat(count),
            onHover: (over)=>{
                setActive(over ? data[item]:0)
            }
        })
    })

    return (
        <>
            <Stack anchor='center' alignSelf='center'>
                <Meter
                    type='circle'
                    size='130px'
                    thickness='medium'
                    values={dataMeter}
                    max='100'
                    background='light-6'
                />
                <Text weight='bold' size='large' alignSelf='center'>
                    {active}%
                </Text>
            </Stack>
        </>
    )
}

export default CircleChart