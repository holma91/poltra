import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import logIn from './login/logIn';
import signUpPhoneNumber from './login/signUpPhoneNumber';
import signUp from './login/signUp';
import Navbar from './navigation/Navbar';
import phoneNumberConfirmation from './login/phoneNumberConfirmation';

export default function App() {
  return (
    phoneNumberConfirmation()
  );
}

