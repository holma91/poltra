import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import logIn from './login/logIn';
import signUpPhoneNumber from './login/signUpPhoneNumber';
import signUp from './login/signUp';
import Navbar from './navigation/Navbar';
import React, { useState } from 'react';
import phoneNumberConfirmation from './login/phoneNumberConfirmation';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Handle authentication status change
  // const handleAuthentication = (status) => {
  //   setIsAuthenticated(status);
  // }

  // If the user is not authenticated, show the login screen
  if (!isAuthenticated) {
    return <logIn />; // det kanske är bra om logIn har en onAuthentication funktion
    // phoneNumberConfirmation()
  }

  // If the user is authenticated, show the app with the Navbar
  return (

    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
}