import { Box, Button, Layer, Nav, Text } from 'grommet'
import { Analytics, Download, History, Package } from 'grommet-icons'
import React, { useEffect, useState } from 'react'
import DeliveryHistorySection from '../../Components/DeliveryHistorySection'
import ProductShippingSection from '../../Components/ProductShippingSection'
import IndividualReportSection from '../../Components/IndividualReportSection'
import WaitSpinner from '../../Components/WaitSpinner'
import { api } from '../../Services/api'

function TrackingOverlay({ id, handle }) {
    const [contract, setContract] = useState([])
    const [relatorio,setRelatorio] = useState({})
    const [loading, setLoading] = useState(true)
    const [secao, setSecao] = useState('historico')
    const [titulo, setTitulo] = useState('Histórico de Entrega')

    const corNavbar = '#06936D'


    useEffect(() => {
        setTimeout(() => {
            api.get("contratoId").then(response => {
                console.log(response.data)
                setContract(response.data)
                console.log(response);
            })
            api.get('relatorioIndividual').then(response=>{
                setRelatorio(response.data)
            })
            setLoading(false)
        }, 2000)
    }, [])

    if (loading) {
        return (
            <Layer
                full='horizontal'
                position='center'
                margin={{
                    horizontal: 'xlarge'
                }}
            >
                <Box
                    direction='column'
                    justify='center'
                    align='center'
                    height='large'
                    background='brand'
                >
                    <WaitSpinner ani={false} fill />
                </Box>
            </Layer>
        )
    }

    return (
        <Layer
            onEsc={() => { handle(false) }}
            onClickOutside={() => { handle(false) }}
            
            position='center'
            modal={true}
            margin={{
                horizontal: 'xlarge'
            }}
            className='overlay'
            background='rgba(110, 110, 113, 0.01)'
        >
            <Box
            direction='row'
            justify='center'
            align='center'
            >

                <Nav
                direction='column'
                justify='center'
                align='end'
                gap='xxsmall'
                background={corNavbar}
                round='small'
                >
                    <Button icon={<Analytics/>} onClick={()=>{setSecao('relatorio'); setTitulo('Relatório da entrega');}} active={secao==='relatorio'?true:false} color={corNavbar} primary hoverIndicator={{background:{color:'accent-1',opacity:'weak'}}}/>
                    <Button icon={<History/>} onClick={()=>{setSecao('historico'); setTitulo('Histórico da entrega');}} active={secao==='historico'?true:false} color={corNavbar} primary hoverIndicator={{background:{color:'accent-1',opacity:'weak'}}}/>
                    <Button icon={<Package/>} onClick={()=>{setSecao('produto'); setTitulo('Produto e transporte')}} active={secao==='produto'?true:false} color={corNavbar} primary hoverIndicator={{background:{color:'accent-1',opacity:'weak'}}}/>
                    <Button icon={<Download/>} color={corNavbar} primary hoverIndicator={{background:{color:'accent-1',opacity:'weak'}}}/>
                </Nav>

                <Box
                    direction='column'
                    justify='between'
                    align='center'
                    height='large'
                    background='light-1'
                    width={secao ==='relatorio' ? '70vw' :'55vw'}
                    round='medium'
                >
                    <Box
                        justify='center'
                        align='center'
                        margin={{top: 'medium'}}
                        height='xxsmall'
                        width='small'
                        background={corNavbar}
                        round='large'
                        elevation='medium'
                    >
                        <Text color='light-1'>{titulo}</Text>
                    </Box>

                    <Box
                        direction='column'
                        justify='center'
                        align='center'
                        height='100%'
                        fill='horizontal'
                        margin={{bottom:'medium'}}
                    >
                        {secao ==='historico' && (<DeliveryHistorySection contract={contract}/>)}
                        {secao ==='produto' && (<ProductShippingSection contract={contract}/>)}
                        {secao ==='relatorio' && (<IndividualReportSection data={relatorio} recentAtt={contract[0]}/>)}
                    </Box>
                </Box>
            </Box>

        </Layer>
    )
}

export default TrackingOverlay