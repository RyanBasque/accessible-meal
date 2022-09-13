import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import AuthProvider from './src/context/userContext';

import CreateAccount from './src/pages/create-account';

export default function App() {
  return (
    <AuthProvider>
      <View>
        <CreateAccount />
        <StatusBar style="auto" />
      </View>
    </AuthProvider>
  );
}
