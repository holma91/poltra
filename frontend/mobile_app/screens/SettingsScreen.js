import { AuthContext } from "../context/AuthContext";
import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, Switch, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native';


const SettingsScreen = ({ navigation }) => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const [isNotificationsOn, setIsNotificationsOn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const { logout } = useContext(AuthContext);

  const handleDarkModeSwitch = () => {
    setIsDarkModeEnabled(!isDarkModeEnabled);
  };

  const handleNotificationsSwitch = () => {
    setIsNotificationsOn(!isNotificationsOn);
  };

  const handleChangePhoneNumber = (newPhoneNumber) => {
    setPhoneNumber(newPhoneNumber);
  };

  const handleDeleteProfile = () => {
    // Implement logic for deleting user profile here
    console.log('User profile deleted');
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Utseende</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Mörkt utseende</Text>
          <Switch value={isDarkModeEnabled} onValueChange={handleDarkModeSwitch} />
        </View>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeader}>Notifikationer</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Få notiser om nyheter</Text>
          <Switch value={isNotificationsOn} onValueChange={handleNotificationsSwitch} />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Ändra telefonnummer</Text>
        <View style={styles.phoneRow}>

          <TextInput
            style={[styles.input, { flex: 0.7 }]}
            placeholder="telefonnummer"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={handleChangePhoneNumber}
            />
          <TouchableOpacity style={[styles.button, { flex: 0.3 }]} onPress={handleChangePhoneNumber}>
          <Text style={styles.buttonText}>Spara </Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={() => {logout()}}>
            <Text style={[styles.buttonText, styles.deleteButtonText]}>Logga ut</Text>
          </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDeleteProfile}>
        <Text style={[styles.buttonText, styles.deleteButtonText]}>Ta bort min profil</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    height: 50,
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    position: 'absolute',
    bottom: 50,
    left: 16,
    right: 16,
  },
  logoutButton: {
    backgroundColor: '#007bff',
    marginTop: 50
  },
  deleteButtonText: {
    color: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 16,
  },
});

export default SettingsScreen;





