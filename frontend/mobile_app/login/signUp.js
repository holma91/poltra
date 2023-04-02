// this is the first file the user will se when trying to sign up, here you enter email and password
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import colors from "../assets/colors/colors";
import { useNavigation } from '@react-navigation/native';
import SignUpPhoneNumber from './SignUpPhoneNumber';
import LogIn from './LogIn';


function SignUp(){
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, confirmSetPassword] = useState("");
  const [emailError, setEmailError] = useState('');
  const navigation = useNavigation();

  function handleEmailChange(text) {
    setEmail(text);
    setEmailError('');
  }

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
  
  function handleSignUp() {
    if (!isValidEmail(email)) {
      // Email is not valid
      console.log('Invalid email');
      return;
    }
  
    if (!isValidPassword(password)) {
      // Password is not valid
      console.log('Invalid password');
      return;
    }
  
    if (password !== confirmPassword) {
      // Password and confirm password do not match
      console.log('Passwords do not match');
      return;
    }
  
    // All input is valid, proceed with sign up process
    console.log('Sign up successful!');
    navigation.navigate('SignUpPhoneNumber');
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Sign Up To</Text>
      <Text style={styles.polText}>Political Transparency.</Text>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          value = {email}
          placeholder="Email..." 
          placeholderTextColor="#1E1E1E"
          onChangeText={handleEmailChange}
          />
        {emailError ? (
          <Text style={styles.errorText}>{emailError}</Text>
        ) : null}

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
      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          value = {confirmPassword}
          placeholder="Confirm Password..." 
          placeholderTextColor="#1E1E1E"
          onChangeText={confirmSetPassword}/>
      </View>
      
      <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
        <Text style={styles.alreadyHaveAccountText}>Already have an account? Log In</Text>
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
    fontSize:35,
    color: colors.offBlack,
    textAlign: 'center',
    marginTop: -100,
  },
  polText:{
    fontWeight:"bold",
    fontSize:45,
    color: colors.blue,
    textAlign: 'center',
    marginBottom:75,
  },
  signUpLogo:{
    fontWeight:"bold",
    fontSize:32,
    color: colors.offBlack,
    marginBottom:30,
    
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
  continueText:{
    color:colors.white
  },
  alreadyHaveAccountText:{
    color:colors.offBlack
  },
  errorText:{
    color:colors.red
  }
});

export default SignUp;