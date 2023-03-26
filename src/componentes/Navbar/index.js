import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToHomePage, goToMapPage, vaParaContatos, vaParaHomepage } from '../../router/Coordinator'
import '../Navbar/styled.css'
import logoDonko from '../../assets/logoDonko.png'
import { AiOutlineMenu } from "react-icons/ai";

export const Navbar = ({isLogged}) => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <header>
      <div className='header-width'>
        <AiOutlineMenu color='white' fontSize="2.5em" />
        <img src={logoDonko} alt='Image Logo' onClick={()=> {
          location.pathname==="/singup"?goToHomePage(navigate):goToMapPage(navigate)
        }}/>
        <p className='purple-text-header' onClick={() => goToHomePage(navigate)}>{location.pathname==="/singup"?"Login":"Logout"}</p>
      </div>
    </header>
  )
}
