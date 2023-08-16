import { Box, Center, ChakraProvider, Image } from '@chakra-ui/react'

export const Header  = () => {
  return(
    <ChakraProvider>
      <Box display='flex' flexDirection='row' backgroundColor='black' padding='15px'>
        <Image src='https://lp.dio.me/wp-content/uploads/2023/03/LOGO-DIO-COLOR-768x311.png' width='9%' height='100%'/>
        <Center color='pink.300' fontSize='45px' >
          Bank
        </Center>
      </Box>
    </ChakraProvider>
  )
}
