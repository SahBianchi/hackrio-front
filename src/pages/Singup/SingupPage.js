import { Checkbox, CheckboxGroup, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import Button from '../../componentes/Button'
import { Layout } from '../../componentes/Layout'
import '../Singup/singup.css'

export const SingupPage = () => {

  return (
    <Layout>
      <div className='singup-container'>
        <div className='title-inputs'>
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
            <p className='title-checkbox'>Escolha seus interesses:</p>
            <div className='checkbox-container'>
              <CheckboxGroup display='flex'>
                <Stack>
                  <Checkbox id='cursor-pointer' value='teatro'>Teatro</Checkbox>
                  <Checkbox id='cursor-pointer' value='música'>Música</Checkbox>
                </Stack>
              </CheckboxGroup>
              <CheckboxGroup display='flex'>
                <Stack>
                  <Checkbox id='cursor-pointer' value='exposição'>Exposição</Checkbox>
                  <Checkbox id='cursor-pointer' value='dança'>Dança</Checkbox>
                </Stack>
              </CheckboxGroup>
              <CheckboxGroup display='flex'>
                <Stack>
                  <Checkbox id='cursor-pointer' value='cinema'>Cinema</Checkbox>
                  <Checkbox id='cursor-pointer' value='literatura'>Literatura</Checkbox>
                </Stack>
              </CheckboxGroup>
            </div>
          </div>


        </div>
        <div className='termo-assinatura'>
          <div id='termos-links'>
            <p>Ao continuar, você concorda com o nosso <span className='purple-text'>Contrato de usuário</span> e nossa <span className='purple-text'>Política de Privacidade.</span> </p>
          </div>

          <div id='checkbox-termo'>
            <input id='cursor-pointer' type='checkbox'></input>
            <p>Eu concordo em receber emails sobre coisas legais no Donko.</p>
          </div>

        </div>
        <Button id='cursor-pointer' type='primary' onClick={() => {
          console.log("Fui Clicado")
        }}>Cadastrar</Button>
      </div>
    </Layout>

  )
}
