import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Header from './header';
import Input from './input';
import ButtonPrimary from './buttonPrimary';
import ButtonSecondary from './buttonSecondary';

export function CreateAccountName({ handleGetCpf, setCpf, cpf, handleBackStep }) {
  return (
    <View style={{ flexDirection: 'column', paddingHorizontal: 20, height: '100%' }}>
      <Header />
      <View style={styles.body}>
        <Text style={styles.title}>Além disso, por favor nos informe seu CPF</Text>
        <Text style={styles.subTitle}>Qual seu CPF?</Text>

        <View>
          <Input onChangeText={setCpf} defaultValue={cpf} />
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

export default CreateAccountName;
