import React from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/login/LoginScreen";
import RegisterScreen from "../screens/login/RegisterScreen";
import HomeTest from "../screens/HomeTest";
import HomeScreen from "../screens/HomeScreen";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
