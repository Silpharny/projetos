import react, { useState, useContext } from "react";
import { Image } from "react-native";
import {
  Container,
  Input,
  Button,
  ButtonText,
  SignUpButton,
  SignUpTextButton,
} from "./styles";

import { AuthContext } from "../../contexts/auth";

export default function Login() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const { signUp } = useContext(AuthContext);

  function handleSignin() {
    if (email === "" || password === "") {
      alert("Preencha todos os campos");
      return;
    }
  }

  async function handleSignup() {
    if (name === "" || email === "" || password === "") {
      alert("Preencha todos os campos");
      return;
    }
    await signUp(name, email, password);
  }

  if (login) {
    return (
      <Container>
        <Image source={require("../../assets/DevPost.png")} />
        <Input
          placeholder="email@email.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="*******"
          value={password}
          onChangeText={(text) => setPassowrd(text)}
        />

        <Button onPress={handleSignin}>
          <ButtonText>Acessar</ButtonText>
        </Button>

        <SignUpButton
          onPress={() => {
            setLogin(false);
            setEmail("");
            setPassowrd("");
          }}
        >
          <SignUpTextButton>Criar uma conta</SignUpTextButton>
        </SignUpButton>
      </Container>
    );
  }

  return (
    <Container>
      <Image source={require("../../assets/DevPost.png")} />
      <Input
        placeholder="Digite seu nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Input
        placeholder="email@email.com"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="*******"
        value={password}
        onChangeText={(text) => setPassowrd(text)}
      />
      <Button onPress={handleSignup}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>

      <SignUpButton
        onPress={() => {
          setLogin(true);
          setName("");
          setEmail("");
          setPassowrd("");
        }}
      >
        <SignUpTextButton>Já tenho uma conta</SignUpTextButton>
      </SignUpButton>
    </Container>
  );
}
