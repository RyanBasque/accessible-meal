import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ textLabel, ...props }) => {

    return (
        <>
            <TextInput 
                style={styles.input}
                placeholder={textLabel}
                {...props} 
            />
        </>
    )
};

export default Input;

export const styles = StyleSheet.create({
    label: {
        position: 'absolute',
    },
    input: {
        width: '100%',
        height: 40,
        marginVertical: 12,
        borderBottomWidth: 1,
        // padding: 10,
        color: '#0000',
    },
  });
  