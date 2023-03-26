import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../componentes/Layout'
import { goToLogin, goToMapPage } from '../router/Coordinator'
import { LoginPage } from './Login/LoginPage'

export const Homepage = () => {
const [isLogged,setIsLogged] = useState(false)
const navigate = useNavigate()

useEffect(()=>{
  isLogged?
  goToMapPage(navigate)
  :
  goToLogin(navigate)
},[])
  
  return (
    <Layout isLogged={isLogged} setIsLogged={setIsLogged}>

       <h1>BORAAAAA PODIUM</h1>
    </Layout>
  )
}
