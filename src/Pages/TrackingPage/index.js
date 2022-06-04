import { Avatar, Box, Button, Footer, Grid, Image, Layer, Nav, Page, PageContent, Sidebar, Spinner, Text, Tip } from 'grommet'
import { Location, Clipboard, Menu } from 'grommet-icons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SideMenu from '../../Components/SideMenu/SideMenu'
import Tabela from '../../Components/TrackingTable/Tabela'
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
    setId(datum.id)
    setShow(true)
    console.log(datum)
  }

  const teste = contracts.map((con) => {
    return {
      id: con.id,
      localRecebimento: con.entrega.localRecebimento,
      statusEntrega: "Entregue"
    }
  })

  if (loading) {
    return (
      <WaitSpinner />
    )
  }

  return (
    <Box
    direction='column'
    justify='center'
    overflow='auto'
    height='100vh'
    >
      <Box
        direction='row'
        align='center'
        justify='start'
        overflow='auto'
        height='100%'
      >

        {showBar && (
          <SideMenu handlerFunction={setShowBar} />
        )}

        <Box width='small' fill='vertical' direction='column' justify='start' pad={{ top: '3px' }}>
          {!showBar && (
            <Button icon={<Menu />} onClick={() => { setShowBar(true) }} primary hoverIndicator margin={{ left: '2px' }} />
          )}
        </Box>

        <Box height='100%'
          direction='column'
          justify='between'
          align='center'
          fill='horizontal'
        >
          <Box
            justify='center'
            align='start'
            height='100%'
            width='xlarge'
            gap='small'
          >
            <h3>Encontramos os seguintes contratos</h3>
            <Tabela dados={teste} clickRow={click} />
          </Box>
        </Box>

        {show && (
          <TrackingOverlay id={id} handle={setShow} />
        )}


        {/*<nav>
            <Link to="/">Tela de Pesquisa</Link>
        </nav>*/}
      </Box>
      <Footer fill='horizontal' background='brand' justify='center'>Rodapé</Footer>
    </Box>
  )
}

export default TrackingPage