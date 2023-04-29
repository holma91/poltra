// this file is used when user already has an account and wants to log in

import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "../../assets/colors/colors";

import { AuthContext } from "../../context/AuthContext";

import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Poltra.</Text>
      <Text style={styles.polText}>Där politisk transparens väger tyngst</Text>

      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="example@domain.com"
          placeholderTextColor={colors.darkGrey}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          secureTextEntry
          style={styles.input}
          value={password}
          placeholder="password"
          placeholderTextColor={colors.darkGrey}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => {login();}}>
        <Text style={styles.loginText}>Logga in</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signUpText}>Inget konto? Skapa ett här</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 25,
    color: colors.offBlack,
    textAlign: "center",
    marginTop: -100,
  },
  polText: {
    fontWeight: "normal",
    fontSize: 45,
    color: colors.blue,
    textAlign: "center",
    marginBottom: 50
  },
  wrapper: {
    width:"80%",
    backgroundColor:colors.lightGrey,
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  input: {
    height:50,
    color:colors.black
  },
  forgot: {
    color: colors.offBlack,
    fontSize: 14,
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
  loginText: {
    color: colors.white,
  },
  signUpText: {
    color: colors.offBlack,
    fontSize: 14,

  },
});
