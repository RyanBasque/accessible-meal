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
import { getLocalData, storeLocalData } from '../../services/storage';

import showConfirmDialog from '../../utils/showConfirmDialog';

function Login({ navigation }) {
  const { storeUser } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUserCredentiais = async () => {
      // await removeLocalValue('@userCredentials');
      // await removeLocalValue('@hasBiometric');
      const hasBiometric = await getLocalData('@hasBiometric');
      const response = await getLocalData('@userCredentials');

      if (hasBiometric) {
        const { success } = await authenticateAsync();

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
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (!email || !password) {
        alert('Coloque e-mail e senha para continuar!');
        return;
      }
      else if (!reg.test(email)) {
        alert('E-mail inválido!');
        return;
      }
    }

    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);z
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Entrar com seus dados</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input 
          placeholder="Digite seu email" 
          onChangeText={setEmail}
          defaultValue={email}
          keyboardType="email-adress"
        />
        <Input 
          placeholder="Digite sua senha" 
          onChangeText={setPassword} 
          defaultValue={password}
          secureTextEntry          
          />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonPrimary 
          text="ENTRAR" 
          isLoading={isLoading} 
          onPress={() => login({ email, password })} 
        />
        <View style={{ marginTop: 30 }}>
          <ButtonSecondary 
            text="CRIAR CONTA" 
            onPress={() => navigation.navigate('createAccount')} 
          />
        </View>
      </View>
    </View>
  );
}

export default Login;
