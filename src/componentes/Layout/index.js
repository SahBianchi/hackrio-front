import React from 'react'
import { Navbar } from '../Navbar'
import "./styled.css"

export const Layout = (props) => {
  return (
    <div className='layout-container'>
        <Navbar/>
        {props.children}
    </div>
  )
}
