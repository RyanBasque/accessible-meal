import { View, Text } from 'react-native';

import { styles } from './styles';

import Input from '../../components/input';
import ButtonPrimary from '../../components/buttonPrimary';
import ButtonSecondary from '../../components/buttonSecondary';
import Header from '../../components/header';

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Entrar com seus dados</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Digite seu email" />
        <Input placeholder="Digite sua senha" />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonPrimary text="ENTRAR" onPress={() => navigation.navigate('home')} />
        <View style={{ marginTop: 30 }}>
          <ButtonSecondary text="CRIAR CONTA" onPress={() => navigation.navigate('createAccount')} />
        </View>
      </View>
    </View>
  );
}

export default Login;
