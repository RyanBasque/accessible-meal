import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const ButtonSecondary = ({ text, ...props }) => {
    return (
        <TouchableOpacity style={styles.button} {...props}>
            <Text>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ButtonSecondary;