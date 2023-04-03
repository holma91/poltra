
import React, { useContext } from "react";

import AppNav from "./navigation/AppNav";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
