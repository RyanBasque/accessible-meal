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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [items, setItems] = useState([]);
  const [nameResponse, setNameResponse] = useState('');
  const [emailResponse, setEmailResponse] = useState('');
  const [isPCDResponse, setIsPCDResponse] = useState(false);


  const api = axios.create({ baseURL: 'http://10.0.2.2:8080',  })

  const login = async () => {
    try {
      let obj = {
        email: email,
        password: password
      }

      let req = await api.post('/api/cliente/login/', obj, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(req.data);

    }catch(err) {
      console.log(err);
      alert("Erro para montar requisição");
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
        <ButtonPrimary text="ENTRAR" onPress={() => {login(); navigation.navigate('home')} } />
        <View style={{ marginTop: 30 }}>
          <ButtonSecondary text="CRIAR CONTA" onPress={() => navigation.navigate('createAccount')} />
        </View>
      </View>
    </View>
  );
}

export default Login;
