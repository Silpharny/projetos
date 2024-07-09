import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Search from "../pages/Search";
import Profile from "../pages/Profile";

import StackRoutes from "./stackRoutes";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyBoard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#dc6601",
        tabBarInactiveTintColor: "#f2f2f2",

        tabBarStyle: {
          backgroundColor: "#222227",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather size={size} name="home" color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather size={size} name="search" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather size={size} name="user" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
