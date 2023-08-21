import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./Components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Conta from "./Pages/Conta";
import ContaInfo from "./Pages/ContaInfo";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conta/:id" element={<Conta />} />
            <Route path='/infoconta' element={<ContaInfo />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
