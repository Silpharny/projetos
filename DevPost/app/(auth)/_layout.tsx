import { Slot } from "expo-router";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

export default function AuthLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#353840" />
      <Slot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#353840",
  },
});
