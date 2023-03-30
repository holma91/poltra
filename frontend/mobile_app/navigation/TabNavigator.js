import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeTest from "../screens/HomeTest";
import HomeScreen from "../screens/HomeScreen";
import StatScreen from "../screens/StatScreen";
import SettingsScreen from "../screens/SettingsScreen";

import IonIcon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeLabel = "Hem";
const StatisticsLabel = "Statistik";
const SettingsLabel = "Inställningar";

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home2"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={HomeLabel}
      screenOptions={({ route }) => ({
        // styling for the navbar
        headerShown: false,
        tabBarStyle: { position: "absolute" },
        tabBarShowLabel: false,
        tabBarStyle: { padding: 10, paddingTop: 10 },
        // color and size for possible future use
        tabBarIcon: ({ focused, tintColor }) => {
          let icon;
          let tabName = route.name;

          if (tabName === HomeLabel) {
            icon = focused ? "ios-newspaper" : "ios-newspaper-outline";
          } else if (tabName === StatisticsLabel) {
            icon = focused ? "stats-chart" : "stats-chart-outline";
          } else if (tabName === SettingsLabel) {
            icon = focused ? "settings" : "settings-outline";
          }

          tintColor = "#2768E7";
          // return the icons (render them)
          return <IonIcon name={icon} color={tintColor} size={25} />;
        },
      })}
    >
      <Tab.Screen name={StatisticsLabel} component={StatScreen} />
      <Tab.Screen name={HomeLabel} component={HomeScreen} />
      <Tab.Screen name={SettingsLabel} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
