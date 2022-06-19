import { Avatar, Box, Button, Layer, Nav, Sidebar, Text } from 'grommet'
import { Clipboard, Close, Info, Location, Unlink, User } from 'grommet-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function SideMenu({handlerFunction}) {
    return (
        <Layer
            full='vertical'
            onClickOutside={() => { handlerFunction(false) }}
            //plain
            position='left'
            background='rgba(110, 110, 113, 0.01)'
        >
            <Sidebar
                background='#99BBDB'
                header={<><Unlink size='large' color='light-6'/><Text color='light-1' size='3xl' weight='bold' margin={{top:'xxsmall'}}>Track Chain</Text></>}
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
                    gap='10px'
                    width='medium'
                    
                >
                    <Button href='/' label='Home' color='#A8C1D9' icon={<Location />} hoverIndicator={{background:{color: '#DBE8F4'}}} primary justify='start' gap='xsmall' className='btn-grommet'/>
                    <Button href='/relatorio' label='Relatorio' color='#A8C1D9' icon={<Clipboard />} hoverIndicator={{background:{color: '#DBE8F4'}}} primary justify='start' gap='xsmall' className='btn-grommet'/>
                    <Button label='Conta' color='#A8C1D9' icon={<User />} hoverIndicator={{background:{color: '#DBE8F4'}}} primary justify='start' gap='xsmall' className='btn-grommet'/>
                    <Button label='Sobre' color='#A8C1D9' icon={<Info />} hoverIndicator={{background:{color: '#DBE8F4'}}} primary justify='start' gap='xsmall' className='btn-grommet'/>
                </Box>
            </Sidebar>
        </Layer>
    )
}

export default SideMenu