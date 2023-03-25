import React from 'react'
import Button from '../../componentes/Button'

export const LoginPage = () => {
  return (
    <>
        <div>
            <h1>Aqui vai ficar a logo</h1>
            <h2>Cultura na palma da sua mão</h2>
        </div>

        <div>
            <input type="email" id="email" name="email" placeholder="E-mail" class="inputPadrao" />

            <input type="password" id="password" name="password" placeholder="Senha" />
        </div>

        <div>
            <Button type="primary" onClick={()=>{
                console.log("fui clicado")
            }}>Continuar</Button>
        </div>
        
    </>
  )
}
