import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <Image style={styles.img} source={require('../../assets/logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({

  header: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 130,
    height: 38,
    marginTop: 20,
  },
});

export default Header;
