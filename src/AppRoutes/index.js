import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchPage from '../Pages/SearchPage'
import TrackingPage from '../Pages/TrackingPage'

function index() {
  return (
    <Routes>
        <Route path='search' element={<SearchPage/>}/>
        <Route path='/' element={<TrackingPage/>}/>
    </Routes>
  )
}

export default index