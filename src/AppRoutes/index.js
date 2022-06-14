import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchPage from '../Pages/SearchPage'
import TrackingPage from '../Pages/TrackingPage'
import Dashboard from "../Pages/DashBoardPage/index"
function index() {
  return (
    <Routes>
        <Route path='search' element={<SearchPage/>}/>
        <Route path='/' element={<TrackingPage/>}/>
        <Route path='/relatorio' element={<Dashboard/>}/>
    </Routes>
  )
}

export default index