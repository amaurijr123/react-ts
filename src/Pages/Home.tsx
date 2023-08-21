import { Center, ChakraProvider } from "@chakra-ui/react";
import { Card } from "../Components/Card";

const Home = () => {
  return (
    <ChakraProvider>
      <Center>
        <Card />
      </Center>
    </ChakraProvider>
  );
};

export default Home;
