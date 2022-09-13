import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Header from './header';
import Input from './input';
import ButtonPrimary from './buttonPrimary';
import ButtonSecondary from './buttonSecondary';

export function CreateAccountEmail({ setEmail, email, handleGetEmail, handleBackStep }) {
  return (
    <View style={{ flexDirection: 'column', paddingHorizontal: 20, height: '100%' }}>
      <Header />
      <View style={styles.body}>
        <Text style={styles.title}>Vamos precisar do seu endereço de email também</Text>
        <Text style={styles.subTitle}>Pode nos dizer seu email?</Text>

        <View>
          <Input 
            keyboardType="email-address" 
            placeholder="Email" 
            onChangeText={setEmail} 
            defaultValue={email} 
          />
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonPrimary text="CONTINUAR" onPress={handleGetEmail} />
        <ButtonSecondary text="Cancelar" onPress={handleBackStep} />
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

export default CreateAccountEmail;
