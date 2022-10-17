import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import ButtonPrimary from './buttonPrimary';

const ModalQrCode = ({ showModal, onPress }) => {
    return (
        <>
            {
                showModal && (   
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Ionicons name="close" size={27} onPress={() => onPress(false)} />
                        </View>
                        <View>
                            <Image style={{width: '70%', height: '70%', marginTop: 15, marginBottom: 10, marginLeft: 30}} source={require('../../assets/qrcode.png')} />
                            <ButtonPrimary text="SALVAR QR CODE"/>
                        </View>
                    </View>
                )
            }
        </>
    )
};

export default ModalQrCode;

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        position: 'absolute',
        height: 470,
        bottom: 0,
        backgroundColor: '#D9D9D9',
        paddingRight: 5,
        paddingLeft: 5,
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderRadius: 10
    },
    modalHeader: {
        alignItems: 'flex-end',
        width: '100%',
    },
    item: {
        paddingVertical: 10
    }
});