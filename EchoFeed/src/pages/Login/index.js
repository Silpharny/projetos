import react, { useState, useContext } from "react";
import { Text } from "react-native";
import {
  Button,
  Container,
  Input,
  TextButton,
  TextRegister,
  Title,
  ToRegister,
} from "./styles";

import { AuthContext } from "../../contexts/auth";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, setLogin] = useState(true);

  const { handleCreateUser, handleLoginUser } = useContext(AuthContext);

  if (login) {
    return (
      <Container>
        <Title>
          Echo
          <Text style={{ color: "#dc6601" }}>Feed</Text>
        </Title>
        <Input
          placeholder="Email@email.com"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="********"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button onPress={() => handleLoginUser(email, password)}>
          <TextButton>Entrar</TextButton>
        </Button>

        <ToRegister
          onPress={() => {
            setLogin(false);
            setEmail("");
            setPassword("");
          }}
        >
          <TextRegister>Criar uma conta</TextRegister>
        </ToRegister>
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        Echo
        <Text style={{ color: "#dc6601" }}>Feed</Text>
      </Title>
      <Input
        placeholder="Digite seu nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Input
        placeholder="Email@email.com"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="********"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button onPress={() => handleCreateUser(name, email, password)}>
        <TextButton>Registrar</TextButton>
      </Button>

      <ToRegister
        onPress={() => {
          setLogin(true);
          setName("");
          setEmail("");
          setPassword("");
        }}
      >
        <TextRegister>Já tenho conta</TextRegister>
      </ToRegister>
    </Container>
  );
}
