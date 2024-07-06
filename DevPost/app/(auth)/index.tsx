import { Link } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="#11111" />
      <View>
        <Text style={styles.title}>DevPost</Text>
        <TextInput style={styles.input}>ss</TextInput>
        <TextInput style={styles.input}>ss</TextInput>
        <TouchableOpacity style={styles.button}>
          <Text>Acessar</Text>
        </TouchableOpacity>
        <Link href="/signUp" style={styles.link}>
          Criar uma conta
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#11111",
  },
  title: {},
  input: {},
  button: {},
  link: {},
});
