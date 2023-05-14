import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';

import Navbar from './navigation/Navbar';
import SignIn from './components/SignIn';

export default function App() {
  return (
    <ClerkProvider publishableKey={Constants.expoConfig.extra.clerkKey}>
      <SafeAreaView style={{ flex: 1 }}>
        <SignedIn>
          <NavigationContainer>
            <Navbar />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <SignIn />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}
