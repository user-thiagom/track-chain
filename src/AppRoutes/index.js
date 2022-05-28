import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchPage from '../Pages/SearchPage'
import TrackingPage from '../Pages/TrackingPage'

function index() {
  return (
    <Routes>
        <Route path='/' element={<SearchPage/>}/>
        <Route path='tracking' element={<TrackingPage/>}/>
    </Routes>
  )
}

export default index