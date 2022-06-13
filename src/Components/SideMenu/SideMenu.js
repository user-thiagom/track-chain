import { Avatar, Box, Button, Layer, Nav, Sidebar, Text } from 'grommet'
import { Clipboard, Close, Location, Unlink } from 'grommet-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function SideMenu({handlerFunction}) {
    return (
        <Layer
            full='vertical'
            onClickOutside={() => { handlerFunction(false) }}
            plain
            position='left'
            animation='fadeIn'
        >
            <Sidebar
                background='status-ok'
                header={<><Unlink size='large' color='light-6'/><Text color='light-1' size='2xl' weight='bold' margin={{top:'xxsmall'}}>Track Chain</Text></>}
                footer={<Button icon={<Close/>} primary alignSelf='center' onClick={() => { handlerFunction(false) }}/>}
                direction='column'
                justify='center'
                align='center'
                fill='vertical'
                animation={{
                    type: 'slideRight',
                    delay: 0,
                    duration: 1000
                }}
                width='17vw'
            >
                <Box
                    direction='column'
                    justify='start'
                    gap='15px'
                    width='medium'
                >
                    <Button href='search' label='Pesquisa (pag teste)' icon={<Location />} hoverIndicator primary justify='start' gap='xsmall' className='btn-grommet'/>
                    <Button href='/' label='Home' icon={<Clipboard />} hoverIndicator primary justify='start' gap='xsmall' className='btn-grommet'/>
                    <Button label='Relatório' icon={<Clipboard />} hoverIndicator primary justify='start' gap='xsmall' className='btn-grommet'/>
                    <Button label='Relatório' icon={<Clipboard />} hoverIndicator primary justify='start' gap='xsmall' className='btn-grommet'/>
                </Box>
            </Sidebar>
        </Layer>
    )
}

export default SideMenu