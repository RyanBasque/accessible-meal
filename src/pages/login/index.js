import React, { useContext, useMemo, useState } from 'react';

import { View, Text } from 'react-native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';

import Input from '../../components/input';
import ButtonPrimary from '../../components/buttonPrimary';
import ButtonSecondary from '../../components/buttonSecondary';
import Header from '../../components/header';
import { useAuth } from '../../context/userContext';
import { stringifyValueWithProperty } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler';

function Login({ navigation }) {
  const { user, storeUser } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [items, setItems] = useState([]);
  const [nameResponse, setNameResponse] = useState('');
  const [emailResponse, setEmailResponse] = useState('');
  const [isPCDResponse, setIsPCDResponse] = useState(false);

  const api = axios.create({ baseURL: 'http://10.0.2.2:8080',  });

  const login = async () => {
    if (!email || !password) {
      alert('Coloque e-mail e senha para continuar!');
      return
    };

    try {
      const params = { email, password };

      let { data } = await api.post('/api/cliente/login/', params, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      storeUser(data);
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
        <ButtonPrimary text="ENTRAR" onPress={login} />
        <View style={{ marginTop: 30 }}>
          <ButtonSecondary text="CRIAR CONTA" onPress={() => navigation.navigate('createAccount')} />
        </View>
      </View>
    </View>
  );
}

export default Login;
