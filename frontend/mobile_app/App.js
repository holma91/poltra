import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import AuthContext from './AuthContext';
import Navbar from './navigation/Navbar';
import PhoneNumberConfirmation from './login/PhoneNumberConfirmation';
import LogIn from './login/LogIn';
import SignUpPhoneNumber from './login/SignUpPhoneNumber';
import SignUp from './login/SignUp';

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handleAuth = (status) => {
  //   setIsAuthenticated(status);
  // }

  if (!isAuthenticated) {
    return(
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }}/>
          <Stack.Screen name="SignUpPhoneNumber" component={SignUpPhoneNumber} options={{ headerShown: false }}/>
          <Stack.Screen name="PhoneNumberConfirmation" component={PhoneNumberConfirmation} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      </AuthContext.Provider>
    )
  }

  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
}