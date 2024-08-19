import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screen/home'
import Usercreate from './screen/Usercreate'
import EditUser from './screen/EditUser'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
     <Route path='createuser' element={<Usercreate />}/>
     <Route path='edituser/:id'element={<EditUser />} />
    </Routes>
  )
}

export default App