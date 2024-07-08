import react, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { AuthContext } from "../contexts/auth";

export default function Routes() {
  const { signed } = useContext(AuthContext);

  const loading = false;

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgorundColor: "#36393f",
        }}
      >
        <ActivityIndicator size={50} color="#e52242" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
