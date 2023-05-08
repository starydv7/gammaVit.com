import React from 'react'
import Home from '../components/Home'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'

const AllRoutes = () => {
  return (
      <div><Home />
          <Routes>
              <Route path="/login" element={<Login/>}/>
      </Routes>
      </div>
  )
}

export default AllRoutes