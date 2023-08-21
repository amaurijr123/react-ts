import { ChakraProvider } from "@chakra-ui/react";
import { Card } from "../Components/Card";

const Home = () => {
  return (
    <ChakraProvider>
      <Card />
    </ChakraProvider>
  );
};

export default Home;
