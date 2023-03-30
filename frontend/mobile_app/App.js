import React, { useContext } from "react";

import AuthStack from "./navigation/AuthStack";
import AppStack from "./navigation/AppStack";

import AppNav from "./navigation/AppNav";

import { AuthProvider } from "./context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
