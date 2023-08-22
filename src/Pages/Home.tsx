import { Center, ChakraProvider, Input } from "@chakra-ui/react";
import { Card } from "../Components/Card";
import { useContext, useState } from "react";
import { MyButton } from "../Components/Button";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import AppContext from "../Components/AppContext";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const { setisLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string) => {
    const loggedIn = await login(email);

    if (!loggedIn) {
      return alert("Email inválido");
    } 
    setisLoggedIn(true);
    navigate("/conta/1");
  };

  return (
    <ChakraProvider>
      <Center>
        <Card>
          <Center marginBottom="15px" fontSize="25px">
            <h1>Faça o login</h1>
          </Center>
          <Center display="flex" flexDirection="column" borderColor="gray.400">
            <Input
              placeholder="email"
              width="70%"
              marginBottom="10px"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <Input placeholder="password" width="70%" />
          </Center>
          <Center margin="10px">
            <MyButton event={() => validateUser(email)} />
          </Center>
        </Card>
      </Center>
    </ChakraProvider>
  );
};

export default Home;
