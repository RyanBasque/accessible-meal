import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Header from './header';
import Input from './input';
import ButtonPrimary from './buttonPrimary';
import ButtonSecondary from './buttonSecondary';

export function CreateAccountName({ handleGetName, setName, name, handleBackStep }) {
  return (
    <View style={{ flexDirection: 'column', paddingHorizontal: 20, height: '100%' }}>
      <Header />
      <View style={styles.body}>
        <Text style={styles.title}>Você poderia começar se apresentando</Text>
        <Text style={styles.subTitle}>Qual é o seu nome completo?</Text>

        <View>
          <Input placeholder="Nome" onChangeText={setName} defaultValue={name} />
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonPrimary text="CONTINUAR" onPress={handleGetName} />
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
