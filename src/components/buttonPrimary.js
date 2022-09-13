import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function ButtonPrimary({ isActive, text, ...props }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: '#3154C5' }]}
      disable={!isActive}
      {...props}
    >
      <Text style={{ color: '#FFFF' }}>{text}</Text>
    </TouchableOpacity>
  );
}

export default ButtonPrimary;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
