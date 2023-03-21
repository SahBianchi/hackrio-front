import React from 'react'
import { useNavigate } from 'react-router-dom'
import { vaParaContatos, vaParaHomepage } from '../../router/Coordinator'

export const Navbar = () => {
    const navigate = useNavigate()
  return (
    <header>
        <p onClick={()=>vaParaHomepage(navigate)}>Homepage</p>
        <p onClick={()=>vaParaContatos(navigate)}>Contatos</p>
    </header>
  )
}
