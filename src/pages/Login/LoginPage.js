import React from 'react'
import Button from '../../componentes/Button'
import styles from '../Login/style.module.css'
import logoDonko from '../../assets/logoDonko.png'

export const LoginPage = () => {
  return (
    <>
    <main>
        <div className={styles.containerHeader}>
            <img src={logoDonko} alt='Image Logo'className={styles.logoLogin}/>
            <h2 className={styles.txtSlogan}>Cultura na palma da sua mão</h2>
        </div>

        <div>
            <form className={styles.containerForm}>
                <input type="email" id="email" name="email" placeholder="E-mail" class="inputPadrao" className={styles.inputLogin}/>

                <input type="password" id="password" name="password" placeholder="Senha" className={styles.inputLogin}/>

                <div className={styles.buttonLogin}>
                    <Button type="primary" onClick={()=>{
                    console.log("fui clicado")
                    }}>Continuar</Button>
                </div>
                
            </form>
        </div>
        
        <div>
            <hr className={styles.linhaLogin} />
            <Button type="secondary" onClick={()=>{
                    console.log("fui clicado")
                }}>Crie uma conta!</Button>
        </div>
    </main>
    </>
  )
}
