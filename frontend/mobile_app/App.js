import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Navbar from './navigation/Navbar';
import LogingIn from './logIn.js';
import React, { useState } from 'react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Handle authentication status change
  // const handleAuthentication = (status) => {
  //   setIsAuthenticated(status);
  // }

  // If the user is not authenticated, show the login screen
  if (!isAuthenticated) {
    return <LogingIn />; // det kanske är bra om logIn har en onAuthentication funktion
  }

  // If the user is authenticated, show the app with the Navbar
  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
}