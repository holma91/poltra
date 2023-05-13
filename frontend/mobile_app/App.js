import { NavigationContainer } from '@react-navigation/native';
import Navbar from './navigation/Navbar';
import React, { useState } from 'react';
import LogIn from './login/LogIn';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Handle authentication status change
  // const handleAuthentication = (status) => {
  //   setIsAuthenticated(status);
  // }

  // If the user is not authenticated, show the login screen
  if (!isAuthenticated) {
    return <LogIn />; // det kanske är bra om logIn har en onAuthentication funktion
    // phoneNumberConfirmation()
  }

  // If the user is authenticated, show the app with the Navbar
  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
}
