import { Avatar, Box, Button, Footer, Grid, Image, Layer, Nav, Page, PageContent, Sidebar, Spinner, Text, Tip } from 'grommet'
import { Location, Clipboard, Menu } from 'grommet-icons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SideMenu from '../../Components/SideMenu/SideMenu'
import TrackingCards from '../../Components/TrackingCards/TrackingCards'
import WaitSpinner from '../../Components/WaitSpinner'
import { api } from '../../Services/api'
import TrackingOverlay from '../TrackingOverlayPage'
import './index.css'

function TrackingPage() {
  const [contracts, setContracts] = useState([])
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)
  const [showBar, setShowBar] = useState(false)
  const [id, setId] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      api.get("contratos").then(response => {
        console.log(response.data)
        setLoading(false)
        setContracts(response.data)
      })
    }, 4000)
  }, [])

  function click(datum) {
    setId(datum.key)
    setShow(true)
    console.log(datum)
  }

  const teste = contracts.map((con) => {
    return {
      key: con.key,
      ultimoEndereco: con.entrega.localRecebimento,
      situacao: con.entrega.foiEntregue ? "Entregue" : "Em transporte",
      responEntrega: con.entrega.responsavelTransporte.nome,
      destinatario: con.destinatario.nome,

    }
  })

  if (loading) {
    return (
      <WaitSpinner />
    )
  }

  return (
    <Box // Container
      direction='column'
      justify='center'
      overflow='auto'
      height='100vh'
    >
      <Box //Caixa que contem o conteudo da página
        direction='row'
        align='center'
        justify='start'
        overflow='auto'
        height='100%'
      >

        {showBar && (
          <SideMenu handlerFunction={setShowBar} />
        )}

        <Box //Div menu lateral
          fill='vertical'
          direction='column'
          justify='start'
          align='center'
          pad={{ top: '3px' }}
        >


          <Button
            icon={<Menu size='large' />}
            onClick={() => { setShowBar(true) }}
            hoverIndicator
            margin={{ left: '30px', top: '30px' }}
            className='btn-menu'
          />

        </Box>

        <Box //Div do conteúdo da página
          height='100%'
          direction='column'
          justify='between'
          align='center'
          fill='horizontal'
        >
          <Box //Caixa dos contratos
            justify='start'
            align='center'
            width='xxlarge'
            gap='medium'
            margin='auto'
            height='large'
            elevation='medium'
            background='light-1'
            round='small'
          >
            <Text size='24px'>Entregas Rastreáveis</Text>
            <TrackingCards dados={teste} clickRow={click} />
          </Box>
        </Box>

        {show && (
          <TrackingOverlay id={id} handle={setShow} />
        )}


        {/*<nav>
            <Link to="/">Tela de Pesquisa</Link>
        </nav>*/}
      </Box>

    </Box>
  )
}

export default TrackingPage