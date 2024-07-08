import { StyleSheet, TextInput, View } from "react-native";

import { InputTypes } from "../../types/InputType";

export default function Input({
  placeholder,
  onChangeText,
  value,
}: InputTypes) {
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      style={styles.container}
      placeholder={`${placeholder}`}
      secureTextEntry={placeholder === "email@email.com" ? false : true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eeeeee",
    height: 47,
    width: 300,
    borderRadius: 7,
    marginBottom: 10,
    paddingHorizontal: 12,
    fontSize: 20,
  },
});
