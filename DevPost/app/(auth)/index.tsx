import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import Input from "../../src/components/Input/input";
import Button from "../../src/components/Button/button";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    alert(`${email}, ${password}`);
  }

  return (
    <>
      <Image source={require("../../assets/DevPost.png")} style={styles.logo} />
      <Input
        placeholder="email@email.com"
        onChangeText={(txt) => setEmail(txt)}
        value={email}
      />
      <Input
        placeholder="********"
        onChangeText={(txt) => setPassword(txt)}
        value={password}
      />
      <Button title="Entrar" btnPress={handleLogin} />
      <Link style={styles.link} href="/signUp">
        Criar uma conta
      </Link>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 50,
  },
  title: {
    color: "#fff",
  },
  input: {},
  button: {},
  link: {
    fontSize: 16,
    marginTop: 10,
    color: "#fff",
    fontStyle: "italic",
  },
});
