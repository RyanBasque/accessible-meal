import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { hasHardwareAsync, isEnrolledAsync, authenticateAsync } from 'expo-local-authentication';

import { styles } from './styles';

import Input from '../../components/input';
import ButtonPrimary from '../../components/buttonPrimary';
import ButtonSecondary from '../../components/buttonSecondary';
import Header from '../../components/header';

import { useAuth } from '../../context/userContext';

import { postData } from '../../services';
import { getLocalData, removeLocalValue, storeLocalData } from '../../services/storage';

import showConfirmDialog from '../../utils/showConfirmDialog';

function Login({ navigation }) {
  const { storeUser } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const getUserCredentiais = async () => {
      // await removeLocalValue('@userCredentials');
      // await removeLocalValue('@hasBiometric');
      const hasBiometric = await getLocalData('@hasBiometric');
      const response = await getLocalData('@userCredentials');

      if (hasBiometric) {
        const { success } = await authenticateAsync();

        console.log('sucess', success);
        console.log('login', response)

        if (success) {
          login(response, true);
          return; 
        }
      } else if (response) {
        setEmail(response.email);
      }
    };

    getUserCredentiais();
  }, []);

  const saveBiometricData = async () => {
    try {
      await storeLocalData('@hasBiometric', true);
    } catch {
      alert("Error");
    }
  };

  const login = async (params, biometric = false) => {
    if (!biometric) {
      if (!email || !password) {
        alert('Coloque e-mail e senha para continuar!');
        return;
      };
    }

    try {
      let { data } = await postData('/api/cliente/login/', params);

      const hasLocalData = await getLocalData('@userCredentials');
      const hasHardwareAcess = await hasHardwareAsync();
      const hasSavedHardwareSecurity = await isEnrolledAsync();

      if (!hasLocalData && hasHardwareAcess && hasSavedHardwareSecurity) {
        showConfirmDialog(
          "Sim", 
          "Deseja ativar o acesso por biometria?",
          saveBiometricData,
        );
      }

      storeUser(data);
      storeLocalData('@userCredentials', params);
      navigation.navigate('home');

    } catch(err) {
      console.log(err);
      alert("E-mal ou senha inválidos.");
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Entrar com seus dados</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Digite seu email" 
          onChangeText={setEmail} 
          defaultValue={email}
          />
        <Input placeholder="Digite sua senha" 
          onChangeText={setPassword} 
          defaultValue={password}
          />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonPrimary text="ENTRAR" onPress={() => login({ email, password })} />
        <View style={{ marginTop: 30 }}>
          <ButtonSecondary text="CRIAR CONTA" onPress={() => navigation.navigate('createAccount')} />
        </View>
      </View>
    </View>
  );
}

export default Login;
