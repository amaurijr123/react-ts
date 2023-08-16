import {Button, ChakraProvider} from '@chakra-ui/react'
import { MouseEventHandler } from 'react';
interface IButton {
    event: MouseEventHandler
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

