import { Box, Button, Center, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import AppContext from '../AppContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const Header  = () => {
  const {isLoggedIn, setisLoggedIn} = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () =>{
    setisLoggedIn(false)
    navigate('/')
  }
  return(
    <Flex backgroundColor='black' padding='5px'>
      <Box display='flex' flexDirection='row' backgroundColor='black' padding='15px'>
        <Image src='https://lp.dio.me/wp-content/uploads/2023/03/LOGO-DIO-COLOR-768x311.png' width='20%' height='100%'/>
        <Center color='pink.300' fontSize='45px' >
          Bank
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button onClick={() => logout()}
            >
            <Text>Sair</Text>
            </Button>
            </>
        )
      }
    </Flex>
  )
}
