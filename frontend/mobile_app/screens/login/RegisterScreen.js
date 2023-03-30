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
  const val = useContext(AuthContext);

  const { register } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Sign Up To</Text>

      <Text style={styles.polText}>Political Transparency.</Text>

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

      <Button
        title="Register"
        onPress={() => {
          register(email, password);
        }}
      />

      <TouchableOpacity>
        <Text style={styles.alreadyHaveAccountText}>
          Already have an account? Log In
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
    fontWeight: "bold",
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
});
