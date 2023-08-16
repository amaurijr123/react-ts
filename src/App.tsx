import { ChakraProvider } from '@chakra-ui/react';
import { Card } from './Components/Card'
import { Layout } from './Components/Layout';

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Card />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
