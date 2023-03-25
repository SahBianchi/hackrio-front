import { Button, Input, Select } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../componentes/Layout'
import '../Singup/singup.css'

export const SingupPage = () => {
  return (
    <Layout>
      <div className='singup-container'>
        <h1>Olá, boas vindas ao Donko </h1>
        <Input placeholder='Apelido'></Input>
        <Input placeholder='E-mail'></Input>
        <Input placeholder='Senha'></Input>
        <Select>Interesses</Select>
        <p>Ao continuar, você concorda com o nosso <span>Contrato de usuário</span> e nossa <span>Política de Privacidade</span> </p>
        <div className='quadradinhoSelect'></div>
        <p>Eu concordo em receber emails sobre coisas legais no Donko</p>
        <Button>Cadastro </Button>
      </div>
    </Layout>

  )
}
