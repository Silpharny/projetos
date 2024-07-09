import react, { useContext } from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import { AuthContext } from "../contexts/auth";
import { ActivityIndicator, View } from "react-native";

export default function Routes() {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItem: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#dc6601" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
