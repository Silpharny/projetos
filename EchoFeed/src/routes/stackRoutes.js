import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Home from "../pages/Home";
import NewPost from "../pages/NewPost";
import PostUser from "../pages/PostsUser";

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="newpost" component={NewPost} />
      <Stack.Screen name="postuser" component={PostUser} />
    </Stack.Navigator>
  );
}
