import { Checkbox, CheckboxGroup, Input, Stack } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../componentes/Button'
import { Layout } from '../../componentes/Layout'
import { BASE_URL } from '../../constants/baseUrl'
import { goToMapPage } from '../../router/Coordinator'
import '../Singup/singup.css'

export const SingupPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [interest, setInterest] = useState([])
  const [isLoading, setIsloading] = useState(false)

  const handleChangeCheckBox = (e) => {
    if (e.target.checked) {
      setInterest([...interest, e.target.value])
    } else {
      const newArr = [...interest]
      const index = newArr.indexOf(e.target.value)
      newArr.splice(index, 1)
      setInterest(newArr)
    }
  }
  const handleOnSubmit = async () => {
    try {
      const newUser = {
        name: nickname,
        email,
        password,
        interests: {
          types: interest,
          categories: []
        }
      }
      setIsloading(true)

      const response = await axios.post(`${BASE_URL}/users/signup`, newUser)
      console.log(response)
      localStorage.setItem("token-donko", response.data.token)
      setIsloading(false)
      setEmail('')
      setPassword('')
      goToMapPage(navigate)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <div className='singup-container'>
        <div className='title-inputs'>
          <h1 className='title-donko'>Olá, boas vindas <br /> ao Donko </h1>
          <div className='input-singup'>
            <Input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder='Apelido'
              width='22.75rem'
              height='3.75rem'
            ></Input>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='E-mail'
              width='22.75rem'
              height='3.75rem'
            ></Input>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder='Senha'
              width='22.75rem'
              height='3.75rem'
            ></Input>
            <p className='title-checkbox'>Escolha seus interesses:</p>
            <div className='checkbox-container'>
              <CheckboxGroup display='flex'>
                <Stack>
                  <Checkbox id='cursor-pointer' value='teatro' onChange={handleChangeCheckBox}>Teatro</Checkbox>
                  <Checkbox id='cursor-pointer' value='música' onChange={handleChangeCheckBox}>Música</Checkbox>
                </Stack>
              </CheckboxGroup>
              <CheckboxGroup display='flex'>
                <Stack>
                  <Checkbox id='cursor-pointer' value='exposição' onChange={handleChangeCheckBox}>Exposição</Checkbox>
                  <Checkbox id='cursor-pointer' value='dança' onChange={handleChangeCheckBox}>Dança</Checkbox>
                </Stack>
              </CheckboxGroup>
              <CheckboxGroup display='flex'>
                <Stack>
                  <Checkbox id='cursor-pointer' value='cinema' onChange={handleChangeCheckBox}>Cinema</Checkbox>
                  <Checkbox id='cursor-pointer' value='literatura' onChange={handleChangeCheckBox}>Literatura</Checkbox>
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
          handleOnSubmit()
        }}>Cadastrar</Button>
      </div>
    </Layout>

  )
}
