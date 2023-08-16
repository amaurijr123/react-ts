import {Button, ChakraProvider} from '@chakra-ui/react'
interface IButton {
    event: () => {}
}
export const MyButton = ({event}: IButton) => {
    return(
        <ChakraProvider>
            <Button onClick={event} colorScheme='purple' size='lg' width='25%'>
                Enviar
            </Button>
        </ChakraProvider>
    );
}

