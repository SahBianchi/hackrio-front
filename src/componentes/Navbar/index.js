import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToHomePage, vaParaContatos, vaParaHomepage } from '../../router/Coordinator'
import '../Navbar/styled.css'
import logoDonko from '../../assets/logoDonko.png'
import { AiOutlineMenu } from "react-icons/ai";

export const Navbar = ({isLogged}) => {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)
  return (
    <header>
      <div className='header-width'>
        <AiOutlineMenu color='white' fontSize="2.5em" />
        <img src={logoDonko} alt='Image Logo' />
        <p className='purple-text-header' onClick={() => goToHomePage(navigate)}>{location.pathname==="/singup"?"Login":"Logout"}</p>
      </div>
    </header>
  )
}
