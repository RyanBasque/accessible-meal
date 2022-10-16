import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Header from './header';
import ButtonPrimary from './buttonPrimary';
import ButtonSecondary from './buttonSecondary';
import RadioButton from './radioButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

function CardDetailRestaurant({ name, classification, typePCD, address }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
        padding: 30,
        marginTop: 0,
        backgroundColor: '#3154C5'
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
        <Image style={styles.img} source={require('../../assets/logoRestaurante4.png')} />
      </View>
      <View
        style={{
          flex: 3,
          flexDirection: 'column'
        }}>
        <Text style={{ fontWeight: 'normal', fontSize: 19, color: '#fff' }}>
          {name}
        </Text>
        <Text style={{ fontWeight: 'light', fontSize: 14, color: '#fff' }}>
          {classification} - {typePCD}
        </Text>
        <Text style={{ fontWeight: 'light', fontSize: 14, color: '#fff' }}>
          {address}
        </Text>
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
  img: {
    width: '90%',
    height: 60,
    marginLeft: 5
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


export default CardDetailRestaurant;