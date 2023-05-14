import { Text, View, StyleSheet } from 'react-native';
import SignInWithOAuth from './SignInWithOAuth';
import colors from '../assets/colors/colors';
export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Political Transparency.</Text>
      <SignInWithOAuth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 35,
    color: colors.offBlack,
    textAlign: 'center',
    marginTop: -100,
  },
  polText: {
    fontWeight: 'bold',
    fontSize: 45,
    color: colors.blue,
    textAlign: 'center',
    marginBottom: 75,
  },
  signUpLogo: {
    fontWeight: 'bold',
    fontSize: 32,
    color: colors.offBlack,
    marginBottom: 30,
  },
  inputView: {
    width: '80%',
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: colors.black,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: colors.blue,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
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
