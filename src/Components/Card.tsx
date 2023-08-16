import { ChakraProvider, Box, Center, Input } from "@chakra-ui/react"
import { Header } from './Header/Header'
import { MyButton } from "./Button"
import { login } from "../services/login"
import { useState, useEffect } from 'react'
import { api } from "../api"

interface UserData {
  email: string
  password: string
  name: string
}

export const Card = () => {

  const [ email, setEmail ] = useState<string>('')
  const [ userData, setUserData ] = useState<null | UserData>()

  useEffect(() => {
    const getData = async () => {
      const data:any|UserData = await api
      setUserData(data)
    }

    getData()
  }, [])

  console.log(userData)

  return(
    <ChakraProvider>
      <Header />
      <Center minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' width='50%'>
          {userData === null || userData === undefined ? 
          <h1>Loading...</h1>: <h1>Informações carregadas</h1>}
          <Center marginBottom='15px' fontSize='25px'>
            <h1>Faça o login</h1>
          </Center>
          <Center display='flex' flexDirection='column' borderColor='gray.400'>
            <p>{userData?.name}</p>
            <Input placeholder="email" width='70%' marginBottom='10px' value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
            <Input placeholder="password" width='70%'  />
          </Center>
          <Center margin='10px'>
            <MyButton event= {() => login(email)}/>
          </Center>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

