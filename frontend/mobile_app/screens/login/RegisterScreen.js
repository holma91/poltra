// this is the first file the user will se when trying to sign up, here you enter email and password
import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "../../assets/colors/colors";

import { AuthContext } from "../../context/AuthContext";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { register } = useContext(AuthContext);

  function isValidEmail(email) {
    // A regular expression to match a valid email address
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }

  function isValidPassword(password) {
    // Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  }

  function handleEmailChange(text) {
    setEmail(text);
    setEmailError('');
  }

  function handlePasswordChange(text) {
    setPassword(text);
    setPasswordError('');
  }

  function handleSignUp() {
    if (!isValidEmail(email)) {
      // Email is not valid
      console.log('Ogiltig email');
      setEmailError('*')
      return;
    }

    if (!isValidPassword(password)) {
      // Password is not valid
      console.log('Ogiltigt lösenord');
      setPasswordError('*')
      return;
    }

    if (password !== confirmPassword) {
      // Password and confirm password do not match
      console.log('Lösenord matchar ej');
      return;
    }
    // register(email, password)
    // All input is valid, proceed with sign up process
    console.log('Sign up successful!');
    navigation.navigate('RegisterPN')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Poltra.</Text>

      <Text style={styles.polText}>Skapa ett konto</Text>

      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="example@domain.com"
          placeholderTextColor={colors.darkGrey}
          onChangeText={handleEmailChange}
        />
      </View>

      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={password}
          placeholder="password"
          placeholderTextColor={colors.darkGrey}
          onChangeText={handlePasswordChange}
          secureTextEntry
        />
      </View>

      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          placeholder="confirm password"
          placeholderTextColor={colors.darkGrey}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
        />
      </View>
      {emailError ? (
            <Text style={styles.errorEmailText}>Ogiltig email</Text>
          ) : null}
      {passwordError ? (
            <Text style={styles.errorPasswordText}>Ogiltigt lösenord, måste innehålla minst 8 tecken varav minst en stor bokstav, en liten bokstav och en siffra.</Text>
          ) : null}


      <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
        <Text style={styles.continueText}>Fortsätt</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.alreadyHaveAccountText}>
          Har du redan ett konto? Logga in här
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 35,
    color: colors.offBlack,
    textAlign: "center",
    marginTop: -100,
  },
  polText: {
    fontWeight: "normal",
    fontSize: 45,
    color: colors.blue,
    textAlign: "center",
    marginBottom: 75,
  },
  signUpLogo: {
    fontWeight: "bold",
    fontSize: 32,
    color: colors.offBlack,
    marginBottom: 30,
  },
  wrapper: {
    width:"80%",
    backgroundColor:colors.lightGrey,
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,

  },
  input: {
    height:50,
    color:colors.black
  },
  loginBtn: {
    width: "80%",
    backgroundColor: colors.blue,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  continueText: {
    color: colors.white,
  },
  alreadyHaveAccountText: {
    color: colors.offBlack,
  },

  errorAsterics:{
    color:colors.red,
    fontSize: 20,
    marginLeft: 10,
    width: 20,
  },

  errorEmailText:{
    color:colors.red,
    fontSize: 14,
  },
  errorPasswordText:{
    color:colors.red,
    fontSize: 14,
    textAlign: 'center',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 310,
    justifyContent: 'space-between',
  },
});
