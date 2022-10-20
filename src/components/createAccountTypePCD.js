import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Header from './header';
import ButtonPrimary from './buttonPrimary';
import ButtonSecondary from './buttonSecondary';
import RadioButton from './radioButton';

const CreateAccountTypePCD = ({ typePCD, handleGetTypePCD, handleBackStep, handlePressInput }) => {

    return (
        <View style={{ flexDirection: 'column', paddingHorizontal: 20, height: '100%' }}>
        <Header />
        <View style={styles.body}>
          <Text style={styles.title}>Qual é seu tipo de deficiência?</Text>
          <View style={{ marginTop: 40 }}>
              <TouchableOpacity style={styles.radio} onPress={() => handlePressInput('visual')}>
                <RadioButton selected={typePCD.includes('visual')} />
                <Text>Deficiência visual</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.radio} onPress={() => handlePressInput('motora')}>
                <RadioButton selected={typePCD.includes('motora')} />
                <Text>Deficiência motora</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.radio} onPress={() => handlePressInput('mental')}>
                <RadioButton selected={typePCD.includes('mental')} />
                <Text>Deficiência mental</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.radio} onPress={() => handlePressInput('auditiva')}>
                <RadioButton selected={typePCD.includes('auditiva')} />
                <Text>Deficiência auditiva</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <ButtonPrimary text="CONTINUAR" onPress={handleGetTypePCD} />
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
  

export default CreateAccountTypePCD;