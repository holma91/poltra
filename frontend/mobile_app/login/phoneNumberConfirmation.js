
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Button, Text, TouchableOpacity, View } from "react-native";
import colors from '../assets/colors/colors';
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { SafeAreaViewBase } from "react-native";
import SignUpPhoneNumber from "./SignUpPhoneNumber";
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../AuthContext';
import { useContext } from "react";


function PhoneNumberConfirmation(props){
    const [code, setCode] = useState('');
    const navigation = useNavigation();
    const { setIsAuthenticated } = useContext(AuthContext);

    const handleCodeFilled = () => {
        if (true) { // Replace with your verification code
           setIsAuthenticated(true);
        } else {
          alert('Invalid verification code');
        }
      }

    return (
        <View style={styleSheet.MainContainer}>
            <Text style={styleSheet.prompt}>Enter the code we sent you</Text>
            <Text style={styleSheet.message}>Your Phone Number will be used to verify you. You will be able to change it later.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpPhoneNumber')}>
                <Text style={styleSheet.button}>Edit Phone Number</Text>
            </TouchableOpacity>
            <OTPInputView 
                style={{ width: "80%", height: 250}}
                pinCount={6}
                autoFocusOnLoad
                codeInputFieldStyle={styleSheet.underlineStyleBase}
                codeInputHighlightStyle={styleSheet.underlineStyleHighLighted}
                onCodeFilled = {handleCodeFilled}
            ></OTPInputView>
        </View>
    );
};

const styleSheet = StyleSheet.create({

    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    message: {
        fontSize: 16,
        paddingHorizontal: 30,
        textAlign: 'center',
        paddingBottom: 20,
      },
    prompt: {
        fontSize: 24,
        paddingHorizontal: 30,
        paddingBottom: 0,
    },
    button: {
        fontSize: 20,
        textAlign: 'center',
        color: colors.blue
    },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: colors.black,
        fontSize: 20,
      },
    
    underlineStyleHighLighted: {
        borderColor: colors.blue,
    },
  
  });

  export default PhoneNumberConfirmation;