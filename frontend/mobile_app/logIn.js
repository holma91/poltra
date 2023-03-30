import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";
import colors from "./assets/colors/colors";


  export default function logIn(){
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    return(
      <View style={styles.container}>
        <Image style={styles.image} source={require("./assets/images/EU.png")} />

        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#FFFFFF"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#FFFFFF"
            secureTextEntry={true}
            maxLength={100}
            onChangeText={(password) => setPassword(password)}
            />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      alignItems: "center",
      justifyContent: "center",
    },
    
    image: {
      marginBottom: 50,
    },

    inputView: {
      backgroundColor: colors.blue,
      borderRadius: 10,
      width: "50%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },

    TextInput: {
      flex: 1,
      padding: 10,
      marginLeft: 1,
      color: colors.white,
      fontSize: 16
    },

    forgot_button: {
      height: 30,
      marginBottom: 30,
    },

    loginBtn: {
      width: "50%",
      borderRadius: 30,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: colors.red,
    },
  });

