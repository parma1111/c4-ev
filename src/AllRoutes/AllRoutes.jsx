import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes