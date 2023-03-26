import React from 'react'
import { Navbar } from '../Navbar'

import "./styled.css"


export const Layout = (props) => {
const {isLogged,setIsLogged} = props

  return (
    <div className='layout-container'>
        <Navbar isLogged={isLogged}/>
        {props.children}
    </div>
  )
}
