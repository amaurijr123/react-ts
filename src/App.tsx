import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./Components/Layout";
import { BrowserRouter} from "react-router-dom";
import { AppContextProvider } from "./Components/AppContext";
import MainRoutes from "./routes";



function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
      <ChakraProvider>
        <Layout>
          <MainRoutes />
        </Layout>
      </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
