import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Settings,
  Button,
} from "react-native";

import { AuthContext } from "../context/AuthContext";

const SettingsScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Inställningar</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 50,
        }}
      >
        <Button
          title="Log Out"
          onPress={() => {
            logout();
          }}
        />
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
  },
  titleText: {
    letterSpacing: "-2px",
    fontSize: "50px",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "20%",
  },
});
