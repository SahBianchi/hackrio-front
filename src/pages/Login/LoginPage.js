import React, { useState } from 'react'
import Button from '../../componentes/Button'
import styles from '../Login/style.module.css'
import logoDonko from '../../assets/logoDonko.png'
import axios from 'axios'
import { BASE_URL } from '../../constants/baseUrl'
import { useNavigate } from 'react-router-dom'
import { goToMapPage, goToSingupPage } from '../../router/Coordinator'
import { useEffect } from 'react'
import { Spinner } from '@chakra-ui/react'

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [isLoading, setIsloading] = useState(false)
useEffect(()=>{
    localStorage.removeItem('token-donko')
    
})

    const handleClick =  async () => {
        try {
            const body ={
                email,
                password
            }
        setIsloading(true)
          
            const response = await axios.post(`${BASE_URL}/users/login`,body)
            console.log(response)
            localStorage.setItem("token-donko",response.data.token)
            setIsloading(false)
            setEmail('')
            setPassword('')
            goToMapPage(navigate)
        } catch (error) {
            setIsloading(false)

            console.log(error)
        }

    }


    return (
        <>
            <section className={styles.sectionLogin}>
                <div className={styles.containerHeader}>
                    <img src={logoDonko} alt='Image Logo' className={styles.logoLogin} />
                    <h2 className={styles.txtSlogan}>Cultura na palma da sua mão</h2>
                </div>

                <div>
                    <form  onSubmit={(e)=>e.preventDefault()} className={styles.containerForm}>
                        <input type="email" id="email" name="email" placeholder="E-mail" className={styles.inputLogin} value={email} onChange={(e) => setEmail(e.target.value)} />

                        <input type="password" id="password" name="password" placeholder="Senha" className={styles.inputLogin} value={password} onChange={(e) => setPassword(e.target.value)} />

                        <div className={styles.buttonLogin}>
                            <Button type="primary" onClick={() => {
                                console.log("fui clicado")
                                handleClick()
                            }}>
                                {
                        isLoading?
                        <Spinner w={"24px"}/>:
                        <span>  Continuar</span>
                            }</Button>
                        </div>

                    </form>
                </div>

                <div>
                    <hr className={styles.linhaLogin} />
                    <Button type="secondary" onClick={() => {

                        goToSingupPage(navigate)
                    }}>Crie uma conta!</Button>
                </div>
            </section>
        </>
    )
}
