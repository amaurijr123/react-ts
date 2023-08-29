import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./Components/Layout";
import { BrowserRouter} from "react-router-dom";
import { AppContextProvider } from "./Components/AppContext";
import MainRoutes from "./routes";
import { createLocalStorage, getAllLocalStorage } from "./services/storage";



function App() {

  !getAllLocalStorage() && createLocalStorage()
  
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
