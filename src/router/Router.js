import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contatos } from '../pages/Contatos'
import { Homepage } from '../pages/Homepage'
import { LoginPage } from '../pages/Login/LoginPage'
import { MapPage } from '../pages/MapPage/MapPage'
import { SingupPage } from '../pages/Singup/SingupPage'
import { CalendarPage } from '../pages/Calendar/CalendarPage'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/singup' element={<SingupPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/map' element={<MapPage/>}/>
            <Route path='/contatos' element={<Contatos/>}/>
            <Route path='/calendar' element={<CalendarPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}
