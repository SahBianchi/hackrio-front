import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contatos } from '../pages/Contatos'
import { Homepage } from '../pages/Homepage'
import { SingupPage } from '../pages/SingupPage'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/singup' element={<SingupPage/>}/>
            <Route path='/contatos' element={<Contatos/>}/>
        </Routes>
    </BrowserRouter>
  )
}
