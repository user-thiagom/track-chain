import { Button, TextInput } from 'grommet'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function SearchPage() {
  const [input,setInput] = useState('')

  return (
    <div className='pagina'>
      <div className='side-header'>
        <h1>TrackChain</h1>
        <h3>
          Acompanhe o rastreamendo de suas encomendas pela blockchain!
        </h3>
      </div>

      <div className='search-area'>
        <h2>Digite o número do contrato</h2>

        <TextInput
        placeholder='digite aqui'
        size='small'
        value={input}
        onChange={(event)=>setInput(event.target.value)}
        />

        <Button
        primary
        label='Pesquisar'
        color='#567A46'
        />
      </div>
      
        {/*<nav>
            <Link to="/tracking">Tela de Rastreamento</Link>
          </nav>*/}
    </div>
  )
}

export default SearchPage