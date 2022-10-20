import { Text, View, StyleSheet } from 'react-native';

import Header from './header';
import Input from './input';
import ButtonPrimary from './buttonPrimary';
import ButtonSecondary from './buttonSecondary';

export function CreateAccountCpf({ handleGetCpf, setCpf, cpf, handleBackStep }) {
  const cpfMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  };

  const handleChangeText = (event) => {
    setCpf(cpfMask(event));
  }

  return (
    <View style={{ flexDirection: 'column', paddingHorizontal: 20, height: '100%' }}>
      <Header />
      <View style={styles.body}>
        <Text style={styles.title}>Além disso, por favor nos informe seu CPF</Text>
        <Text style={styles.subTitle}>Qual seu CPF?</Text>

        <View>
          <Input onChangeText={handleChangeText} keyboardType="number" defaultValue={cpf} maxLength='14' />
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonPrimary text="CONTINUAR" onPress={handleGetCpf} />
        <ButtonSecondary text="Cancelar / Voltar" onPress={handleBackStep} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    marginTop: 55,
    overflow: 'hidden',
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 22,
    marginTop: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '110%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  input: {
    color: '#0000',
  },
});

export default CreateAccountCpf;
