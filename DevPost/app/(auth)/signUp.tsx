import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Pressable } from "react-native";

export default function SignIn() {
  return (
    <>
      <Link style={styles.link} href="/">
        Já possuo conta
      </Link>
    </>
  );
}

const styles = StyleSheet.create({
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
