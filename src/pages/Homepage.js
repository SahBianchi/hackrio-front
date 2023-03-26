import React, { useState } from 'react'
import { Layout } from '../componentes/Layout'
import { LoginPage } from './Login/LoginPage'

export const Homepage = () => {
  const [pageFlow,setPageFlow] = useState("login")

  
  return (
    <Layout>
       <h1>BORAAAAA PODIUM</h1>
    </Layout>
  )
}
