import * as React from 'react';
// api/libraries required for navbar
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';

import HomeView from './views/Home';
import StatisticsView from './views/Statistics';
import SettingsView from './views/Settings';

const Element = createBottomTabNavigator();

const HomeLabel = 'Hem';
const StatisticsLabel = 'Statistik';
const SettingsLabel = 'Inställningar';

function Navbar() {
  return (
    <Element.Navigator
      initialRouteName={HomeLabel}
      screenOptions={({ route }) => ({
        // styling for the navbar
        headerShown: false,
        tabBarStyle: { position: 'absolute' },
        tabBarShowLabel: false,
        tabBarStyle: { padding: 10, paddingTop: 10 },
        // color and size for possible future use
        tabBarIcon: ({ focused, tintColor }) => {
          let icon;
          let elemName = route.name;

          if (elemName === HomeLabel) {
            icon = focused ? 'ios-newspaper' : 'ios-newspaper-outline';
          } else if (elemName === StatisticsLabel) {
            icon = focused ? 'stats-chart' : 'stats-chart-outline';
          } else if (elemName === SettingsLabel) {
            icon = focused ? 'settings' : 'settings-outline';
          }

          tintColor = '#2768E7';
          // return the icons (render them)
          return <IonIcon name={icon} color={tintColor} size={25} />;
        },
      })}
    >
      <Element.Screen name={StatisticsLabel} component={StatisticsView} />
      <Element.Screen name={HomeLabel} component={HomeView} />
      <Element.Screen name={SettingsLabel} component={SettingsView} />
    </Element.Navigator>
  );
}

export default Navbar;
