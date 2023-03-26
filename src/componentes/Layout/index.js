import React from 'react'
import { Navbar } from '../Navbar'

export const Layout = (props) => {
  return (
    <div className='layout-container'>
        <Navbar/>
        {props.children}
    </div>
  )
}
