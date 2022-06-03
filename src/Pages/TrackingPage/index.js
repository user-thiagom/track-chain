import { Avatar, Box, Button, Grid, Image, Nav, Sidebar, Spinner, Text, Tip } from 'grommet'
import { Location, Clipboard } from 'grommet-icons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Tabela from '../../Components/Tabela'
import { api } from '../../Services/api'
import TrackingOverlay from '../TrackingOverlayPage'
import './index.css'

function TrackingPage() {
  const [contracts, setContracts] = useState([])
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)
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
      <Box
      align='center'
      justify='center'
      height='100vh'
      animation='pulse'
      background='dark-1'
      >
        <Text size='2xl' margin='medium'>Espere um momento</Text>
        <Spinner message="Carregando nesse carai" color='accent-1' size='large' />
      </Box>
    )
  }

  return (
    <>
      <Grid
        rows={['100vh', 'auto']}
        columns={['xsmall', 'auto']}
        areas={[
          { name: 'sidebar', start: [0, 0], end: [0, 1] },
          { name: 'main', start: [1, 0], end: [1, 1] }
        ]}
      >
        <Sidebar background='brand' header={<Avatar src='//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80' />} gridArea='sidebar' align='center'>
          <Nav>
            <Tip content='Rastreamento'>
              <Button icon={<Location />} hoverIndicator />
            </Tip>
            <Tip content='Relatório'>
              <Button icon={<Clipboard />} hoverIndicator />
            </Tip>
          </Nav>
        </Sidebar>
        <Tabela dados={teste} gridArea='main' clickRow={click} />

        {show && (
          <TrackingOverlay id={id} handle={setShow} />
        )}

      </Grid>

      {/*<nav>
            <Link to="/">Tela de Pesquisa</Link>
        </nav>*/}
    </>
  )
}

export default TrackingPage