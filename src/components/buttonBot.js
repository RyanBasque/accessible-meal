import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

function ButtonBot({ text, ...props }) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

export default ButtonBot;
