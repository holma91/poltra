// this file is used when user already has an account and wants to log in

import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import colors from "../assets/colors/colors";



export default function logIn(){
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Political Transparency.</Text>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          value = {email}
          placeholder="Email..." 
          placeholderTextColor="#1E1E1E"
          onChangeText={setEmail}/>
      </View>
      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          value = {password}
          placeholder="Password..." 
          placeholderTextColor="#1E1E1E"
          onChangeText={setPassword}/>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:45,
    color: colors.offBlack,
    marginBottom:50,
    
  },
  inputView:{
    width:"80%",
    backgroundColor:colors.lightGrey,
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:colors.black
  },
  forgot:{
    color:colors.offBlack,
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:colors.blue,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:colors.white
  },
  signUpText:{
    color:colors.offBlack
  }
});
