import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Home from "../pages/Home";
import NewPost from "../pages/NewPost";
import PostUser from "../pages/PostsUser";

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="newpost"
        component={NewPost}
        options={{
          title: "Novo Post",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#36393f" },
        }}
      />
      <Stack.Screen
        name="postuser"
        component={PostUser}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
