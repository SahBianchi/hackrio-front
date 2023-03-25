import React, { useState } from 'react'
import Button from '../../componentes/Button'
import styles from '../Login/style.module.css'
import logoDonko from '../../assets/logoDonko.png'
import axios from 'axios'
import { BASE_URL } from '../../constants/baseUrl'

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsloading] = useState(false)


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
        } catch (error) {
            setIsloading(false)

            console.log(error)
        }

    }

    const submitLogin = async (body) =>{
        try {
            setIsloading(true)
            const response = await axios.post(BASE_URL+"/users",body)
            console.log(response)
            setIsloading(false)
        } catch (error) {
            setIsloading(false)

            console.log(error)
        }
    }

    return (
        <>
            <main>
                <div className={styles.containerHeader}>
                    <img src={logoDonko} alt='Image Logo' className={styles.logoLogin} />
                    <h2 className={styles.txtSlogan}>Cultura na palma da sua mão</h2>
                </div>

                <div>
                    <form  onSubmit={(e)=>e.preventDefault()} className={styles.containerForm}>
                        <input type="email" id="email" name="email" placeholder="E-mail" class="inputPadrao" className={styles.inputLogin} value={email} onChange={(e) => setEmail(e.target.value)} />

                        <input type="password" id="password" name="password" placeholder="Senha" className={styles.inputLogin} value={password} onChange={(e) => setPassword(e.target.value)} />

                        <div className={styles.buttonLogin}>
                            <Button type="primary" onClick={() => {
                                console.log("fui clicado")
                                handleClick()
                            }}>Continuar{isLoading ? 1 : 0}</Button>
                        </div>

                    </form>
                </div>

                <div>
                    <hr className={styles.linhaLogin} />
                    <Button type="secondary" onClick={() => {
                               console.log("fui clicado")

                    }}>Crie uma conta!</Button>
                </div>
            </main>
        </>
    )
}
