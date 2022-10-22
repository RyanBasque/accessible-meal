import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
                            <Image style={{ width: '100%', height: '70%', marginTop: 15, marginBottom: 25, borderRadius: 10 }} source={require('../../assets/qrcode.png')} />
                            <ButtonPrimary text="SALVAR QR CODE" onPress={() => onPress(false)} />
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
        height: 400,
        bottom: 70,
        backgroundColor: '#D9D9D9',
        paddingRight: 20,
        paddingLeft: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderRadius: 5
    },
    modalHeader: {
        alignItems: 'flex-end',
        width: '100%',
    },
    item: {
        paddingVertical: 10
    }
});