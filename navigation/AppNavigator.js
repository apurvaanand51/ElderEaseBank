import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import AssistantScreen from "../screens/AssistantScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Login") iconName = "log-in-outline";
            else if (route.name === "Home") iconName = "home-outline";
            else if (route.name === "Assistant") iconName = "chatbubbles-outline";
            else if (route.name === "Settings") iconName = "settings-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#007bff",
          tabBarInactiveTintColor: "gray",
        })}
      >
        {isAuthenticated ? (
          <>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Assistant" component={AssistantScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </>
        ) : (
          <Tab.Screen name="Login" component={LoginScreen} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
