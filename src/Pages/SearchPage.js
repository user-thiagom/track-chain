import React from 'react'
import { Link } from 'react-router-dom'

function SearchPage() {
  return (
    <div>
        <h1>Tela de Pesquisa</h1>
        <nav>
            <Link to="/tracking">Tela de Rastreamento</Link>
        </nav>
    </div>
  )
}

export default SearchPage