import { Button, Input, Radio, RadioGroup, Select, Stack } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../componentes/Layout'
import '../Singup/singup.css'

export const SingupPage = () => {
  return (
    <Layout>
      <div className='singup-container'>
        <h1 className='title-donko'>Olá, boas vindas <br /> ao Donko </h1>
        <div className='input-singup'>
          <Input
            placeholder='Apelido'
            width='22.75rem'
            height='3.75rem'
          ></Input>
          <Input
            placeholder='E-mail'
            width='22.75rem'
            height='3.75rem'
          ></Input>
          <Input
            placeholder='Senha'
            width='22.75rem'
            height='3.75rem'
          ></Input>
          <RadioGroup 
          border='2px solid yellow'
          width='22.75rem'
          height='4.5rem'
          display='flex'
          flexDirection='column'
            >
            {/* add depois onChange='' value={value} */}
            <Stack direction='row'>
              <Radio value='Teatro'>Teatro</Radio>
              <Radio value='Música'>Música</Radio>
              <Radio value='Dança'>Dança</Radio>
            </Stack>
            <Stack direction='row'>
              <Radio value='Exposição'>Exposição</Radio>
              <Radio value='Cinema'>Cinema</Radio>
              <Radio value='Literatura'>Literatura</Radio>
            </Stack>
          </RadioGroup>
        </div>
        <p>Ao continuar, você concorda com o nosso <span className='purple-text'>Contrato de usuário</span> e nossa <span className='purple-text'>Política de Privacidade</span> </p>
        <div className='quadradinhoSelect'></div>
        <p>Eu concordo em receber emails sobre coisas legais no Donko</p>
        <Button>Cadastro </Button>
      </div>
    </Layout>

  )
}
