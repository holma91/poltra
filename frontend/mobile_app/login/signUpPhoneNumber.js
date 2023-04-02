// this is the second screen the user sees when trying to sign up

import React, {useState, useRef} from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import colors from '../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';
import PhoneNumberConfirmation from './PhoneNumberConfirmation';

function SignUpPhoneNumber() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);
  const navigation = useNavigation();
  const validPhoneNumber = () => {
    // check number is +46 and then 9 numbers after. 
  }

  return (
    <View style={styleSheet.MainContainer}>

      <Text style={styleSheet.heading}> Enter your {'\n'}Phone Number </Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styleSheet.editButton}>Edit Username Or Password</Text>
      </TouchableOpacity>
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
      <TouchableOpacity style={styleSheet.button} onPress={() => navigation.navigate('PhoneNumberConfirmation')}>
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
    marginBottom: 20,
    marginTop: -150,
    color: colors.offBlack
  },

  phoneNumberView: {
    width: '80%',
    borderRadius:10,
    marginTop: 180,
    height: 55,
    backgroundColor: colors.white
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    marginTop: 20,
    width: '80%',
    padding: 8,
    backgroundColor: colors.blue,
  },

  buttonText:{
    fontSize: 20,
    textAlign: 'center',
    color: colors.white
  },
  editButton:{
    fontSize: 20,
    textAlign: 'center',
    color: colors.blue
  }
});

export default SignUpPhoneNumber;