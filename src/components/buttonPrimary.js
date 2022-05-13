import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonPrimary = ({ isActive, text, ...props }) => {

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: !isActive ? '#B9B9B9' : '#3154C5' }]}>
            <Text style={{ color: !isActive ? '#737B7D': '#FFFF' }}>{text}</Text>
        </TouchableOpacity>
    );
    
};

export default ButtonPrimary;

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
});