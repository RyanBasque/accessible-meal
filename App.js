import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CreateAccount from './src/pages/create-account';

export default function App() {
  return (
    <View>
      <CreateAccount />
      <StatusBar style="auto" />
    </View>
  );
}
