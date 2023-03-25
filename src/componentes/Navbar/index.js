import React from 'react'
import { useNavigate } from 'react-router-dom'
import { vaParaContatos, vaParaHomepage } from '../../router/Coordinator'
import '../Navbar/styled.css'
import logoDonko from '../../assets/logoDonko.png'
import { AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <header>
      <div className='header-width'>
        <AiOutlineMenu color='white' fontSize="2.5em" />
        <img src={logoDonko} alt='Image Logo' />
        <p className='purple-text-header' onClick={() => vaParaHomepage(navigate)}>Login</p>
      </div>
    </header>
  )
}
