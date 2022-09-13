import {
  View, Image, Text,
} from 'react-native';

import { styles } from './styles';

import Input from '../../components/input';
import ButtonPrimary from '../../components/buttonPrimary';
import ButtonSecondary from '../../components/buttonSecondary';

const img = require('../../../assets/logo.png');

function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={img} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Entrar com seus dados</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Digite seu email" />
        <Input placeholder="Digite sua senha" />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonPrimary text="ENTRAR" isActive />
        <View style={{ marginTop: 30 }}>
          <ButtonSecondary text="CRIAR CONTA" />
        </View>
      </View>
    </View>
  );
}

export default Login;
