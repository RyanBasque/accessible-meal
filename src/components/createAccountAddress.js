import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Header from './header';
import Input from './input';
import ButtonPrimary from './buttonPrimary';
import ButtonSecondary from './buttonSecondary';

export function CreateAccountAddress({ handleGetAddress, setAddress, address, handleBackStep }) {
  return (
    <View style={{ flexDirection: 'column', paddingHorizontal: 20, height: '100%' }}>
      <Header />
      <View style={styles.body}>
        <Text style={styles.title}>Também vamos precisar do seu endereço.</Text>
        <Text style={styles.subTitle}>Onde você mora?</Text>

        <View>
          <Input onChangeText={setAddress} defaultValue={address} />
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonPrimary text="CONTINUAR" onPress={handleGetAddress} />
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

export default CreateAccountAddress;
