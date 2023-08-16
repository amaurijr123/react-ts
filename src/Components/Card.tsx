import { ChakraProvider, Box, Center, Input } from "@chakra-ui/react"
import { Header } from './Header/Header'
import { MyButton } from "./Button"
import { login } from "../services/login"

export const Card = () => {
  return(
    <ChakraProvider>
      <Header />
      <Center minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' width='50%'>
          <Center marginBottom='15px' fontSize='25px'>
            <h1>Faça o login</h1>
          </Center>
          <Center display='flex' flexDirection='column' borderColor='gray.400'>
            <Input placeholder="email" width='70%' marginBottom='10px'/>
            <Input placeholder="password" width='70%'  />
          </Center>
          <Center margin='10px'>
            <MyButton event= {login}/>
          </Center>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

