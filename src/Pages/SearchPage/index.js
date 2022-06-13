import { Button, TextInput } from 'grommet'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function SearchPage() {
  const [input,setInput] = useState('')

  function pesquisar() {
    alert('Valor do Input: ' + input);
  }

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
        className='input-search'
        />

        <Button
        primary
        label='Pesquisar'
        color='#567A46'
        alignSelf='start'
        size='large'
        className='btn-search'
        href='/'
        />
      </div>
      
        {/*<nav>
            <Link to="/tracking">Tela de Rastreamento</Link>
          </nav>*/}
    </div>
  )
}

export default SearchPage