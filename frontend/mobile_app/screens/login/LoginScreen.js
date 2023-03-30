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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Political Transparency.</Text>

      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button
        title="Login"
        onPress={() => {
          login();
        }}
      />

      <TouchableOpacity>
        <Text style={styles.signUpText}>Sign Up</Text>
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
    fontSize: 45,
    color: colors.offBlack,
    marginBottom: 50,
  },
  wrapper: {
    width: "80%",
    justifyContent: "center",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
    //height: 50,
    //color: colors.black,
  },
  forgot: {
    color: colors.offBlack,
    fontSize: 11,
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
  },
});
