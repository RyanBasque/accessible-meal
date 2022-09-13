import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Header from './header';
import ButtonPrimary from './buttonPrimary';
import ButtonSecondary from './buttonSecondary';
import RadioButton from './radioButton';

const CreateAccountIsPCD = ({ setIsPCD, isPCD, handleGetIsPCD, handleBackStep }) => {
    return (
        <View style={{ flexDirection: 'column', paddingHorizontal: 20, height: '100%' }}>
        <Header />
        <View style={styles.body}>
          <Text style={styles.title}>Você é um PCD (Pessoa com deficiência)?</Text>
          <View style={{ marginTop: 40 }}>
              <TouchableOpacity style={styles.radio} onPress={() => setIsPCD(true)}>
                <RadioButton selected={isPCD} />
                <Text>Sim, sou PCD</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.radio} onPress={() => setIsPCD(false)}>
                <RadioButton selected={!isPCD} />
                <Text>Não, não sou PCD</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <ButtonPrimary text="CONTINUAR" onPress={handleGetIsPCD} />
          <ButtonSecondary text="Cancelar" onPress={handleBackStep} />
        </View>
      </View>
    );
};

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
    radio: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
  });
  

export default CreateAccountIsPCD;