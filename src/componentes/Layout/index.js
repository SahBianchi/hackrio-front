import React from 'react'
import { Navbar } from '../Navbar'
import '../Layout/styled.css'

export const Layout = (props) => {
  return (
    <div className='layout-container'>
        <Navbar/>
        {props.children}
    </div>
  )
}
