import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Header from './header';
import ButtonPrimary from './buttonPrimary';
import ButtonSecondary from './buttonSecondary';
import RadioButton from './radioButton';

function HomeRestaurantModal ({name, classification, typePCD, address}) {
    return (
      <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 4,
        padding: 10,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
        <Image style={styles.img} source={require('../../assets/genericuser.png')} />
      </View>
      <View
        style={{
          flex: 3,
          flexDirection: 'column'
        }}>
        <Text style={{ fontWeight: 'normal', fontSize: 18, color: '#333' }}>
          {name}
        </Text>
        <Text style={{ fontWeight: 'light', fontSize: 12, color: '#555' }}>
          {classification} - {typePCD}
        </Text>
        <Text style={{ fontWeight: 'light', fontSize: 12, color: '#555' }}>
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
      width: 50,
      height: 50,
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
  

export default HomeRestaurantModal;