// this is the second screen the user sees when trying to sign up

import React, {useState, useRef} from 'react';

import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';

import PhoneInput from 'react-native-phone-number-input';
import colors from '../assets/colors/colors';

export default function signUpPhoneNumber() {

  const [phoneNumber, setPhoneNumber] = useState('');

  const phoneInput = useRef(null);

  const validPhoneNumber = () => {
    // check number is +46 and then 9 numbers after. 
  }

  return (
    <View style={styleSheet.MainContainer}>

      <Text style={styleSheet.heading}> Enter your {'\n'}Phone Number </Text>

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

      <TouchableOpacity  style={styleSheet.button}>
        <Text style={styleSheet.buttonText}>Continue</Text>
      </TouchableOpacity >
    </View>
  );
};

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
    marginTop: 35,
    width: '80%',
    padding: 8,
    backgroundColor: colors.blue,
  },

  buttonText:{
    fontSize: 20,
    textAlign: 'center',
    color: colors.white
  }
});