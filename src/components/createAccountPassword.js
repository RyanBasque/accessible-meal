import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Header from './header';
import Input from './input';
import ButtonPrimary from './buttonPrimary';
import ButtonSecondary from './buttonSecondary';
import KeyboardView from './keyboardView';

export function CreateAccountPassword({ setPassword, password, handleGetPassword, handleBackStep, isLoading }) {
  return (
    <KeyboardView>
      <View style={{ flexDirection: 'column', paddingHorizontal: 20, height: '100%' }}>
        <Header />
        <View style={styles.body}>
          <Text style={styles.title}>Precisamos que você crie uma senha</Text>
          <Text style={styles.subTitle}>Pode nos dizer qual?</Text>

          <View>
            <Input 
              secureTextEntry
              placeholder="Senha"
              onChangeText={setPassword} 
              defaultValue={password}
          />
          </View>
        </View>
        <View style={styles.footer}>
          <ButtonPrimary text="CONTINUAR" onPress={handleGetPassword} isLoading={isLoading} />
          <ButtonSecondary text="Cancelar" onPress={handleBackStep} />
        </View>
      </View>
    </KeyboardView>
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

export default CreateAccountPassword;
