import { StatusBar } from "expo-status-bar";

import AuthProvider from "./src/context/userContext";

import Routes from "./src/routes";

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <Routes />
    </AuthProvider>
  );
}
