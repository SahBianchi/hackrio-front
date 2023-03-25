import React from 'react'
import styles from './style.module.css'

export default function Button({type, children, onClick}){
    function click(){
        return onClick()
    }

    return(
        <>
            <button className={styles[type]} onClick={click}>{children}</button>
        </>
    )
}
