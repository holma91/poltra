// this is the first file the user will se when trying to sign up, here you enter email and password
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import colors from '../assets/colors/colors';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, confirmSetPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Sign Up To</Text>
      <Text style={styles.polText}>Political Transparency.</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          value={email}
          placeholder="Email..."
          placeholderTextColor="#1E1E1E"
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          value={password}
          placeholder="Password..."
          placeholderTextColor="#1E1E1E"
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          value={confirmPassword}
          placeholder="Confirm Password..."
          placeholderTextColor="#1E1E1E"
          onChangeText={confirmSetPassword}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.alreadyHaveAccountText}>
          Already have an account? Log In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 35,
    color: colors.offBlack,
    textAlign: 'center',
    marginTop: -100,
  },
  polText: {
    fontWeight: 'bold',
    fontSize: 45,
    color: colors.blue,
    textAlign: 'center',
    marginBottom: 75,
  },
  signUpLogo: {
    fontWeight: 'bold',
    fontSize: 32,
    color: colors.offBlack,
    marginBottom: 30,
  },
  inputView: {
    width: '80%',
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: colors.black,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: colors.blue,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  continueText: {
    color: colors.white,
  },
  alreadyHaveAccountText: {
    color: colors.offBlack,
  },
});
