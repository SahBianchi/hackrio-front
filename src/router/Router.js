import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contatos } from '../pages/Contatos'
import { Homepage } from '../pages/Homepage'
import { LoginPage } from '../pages/Login/LoginPage'
import { SingupPage } from '../pages/Singup/SingupPage'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/singup' element={<SingupPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/contatos' element={<Contatos/>}/>
        </Routes>
    </BrowserRouter>
  )
}
