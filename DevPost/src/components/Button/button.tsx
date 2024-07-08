import { Pressable, StyleSheet, Text } from "react-native";

import { ButtonTypes } from "../../types/ButtonType";

export default function Button({ title, btnPress }: ButtonTypes) {
  return (
    <Pressable style={styles.container} onPress={btnPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#428CFD",
    width: 300,
    height: 47,
    marginTop: 10,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
  },
});
