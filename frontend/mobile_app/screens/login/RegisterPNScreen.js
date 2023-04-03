// this is the second screen the user sees when trying to sign up

import React, {useState, useRef} from 'react';

import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';

import PhoneInput from 'react-native-phone-number-input';
import colors from "../../assets/colors/colors";

import { AuthContext } from "../../context/AuthContext";

const RegisterPNScreen = ({ navigation }) => {

  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const phoneInput = useRef(null);

  function isValidPN (pn) {
    const phoneRegex = /^\+46\d{9}$/;
    return phoneRegex.test(pn);
  }

  function handlePNsignUp() {
    if(!isValidPN(phoneNumber)){
      console.log('Invalid email');
      setPhoneError('Invalid Phone Number');
      return;
    }
    console.log('Valid Phone number');

    navigation.navigate('ConfirmPN');
  }

  return (
    <View style={styleSheet.MainContainer}>

      <Text style={styleSheet.heading}> Enter your {'\n'}Phone Number </Text>
      {phoneError ? (
            <Text style={styleSheet.phoneErrorText}>{phoneError}</Text>
          ) : null}
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="SE"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styleSheet.phoneNumberView}
        textContainerStyle={{ paddingVertical: 0 }}
        onChangeFormattedText={text => {
          setPhoneNumber(text);
        }}
      />

      <TouchableOpacity  style={styleSheet.button} onPress={handlePNsignUp}>
        <Text style={styleSheet.buttonText}>Continue</Text>
      </TouchableOpacity >
    </View>
  );
};

export default RegisterPNScreen;

const styleSheet = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading:{
    fontWeight:"bold",
    fontSize: 32,
    textAlign: 'center',
    paddingBottom: 0,
    marginBottom: 200,
    marginTop: -150,
    color: colors.offBlack
  },

  phoneNumberView: {
    width: '80%',
    borderRadius:10,
    height: 55,
    backgroundColor: colors.white
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    marginTop: 25,
    width: '80%',
    padding: 8,
    backgroundColor: colors.blue,
  },

  buttonText:{
    fontSize: 20,
    textAlign: 'center',
    color: colors.white
  },
  phoneErrorText:{
    color: colors.red,
    fontSize: 14,
    alignItems: 'center',
  },

});