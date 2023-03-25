import React from 'react'
import styles from './style.module.css'

export const InfoHour = ({type, children}) => {
  return (
    <>
        <h2 className={styles[type]}>{children}</h2>
    </>
  )
}
