import react, { useState } from "react";
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

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, setLogin] = useState(true);

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
        <Button onPress={() => console.log(`${email} => ${password} `)}>
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
      <Button
        onPress={() => console.log(`${name} => ${email} => ${password} `)}
      >
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
        <TextRegister>Criar uma conta</TextRegister>
      </ToRegister>
    </Container>
  );
}
