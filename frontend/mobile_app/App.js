import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  useClerk,
} from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';

import Navbar from './navigation/Navbar';
import SignInWithOAuth from './components/SignInWithOAuth';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Navbar />
//     </NavigationContainer>
//   );
// }
