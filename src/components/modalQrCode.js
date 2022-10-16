import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'
import ButtonPrimary from './buttonPrimary';

const Item = ({ item, navigation }) => (
    <TouchableOpacity 
        style={styles.item} 
        onPress={() => navigation.navigate('createRestaurant', item)}
    >
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

const ModalQrCode = ({ showModal, itens, onPress, navigation }) => {
    const renderItem = ({ item }) => 
        <Item 
            item={item}
            navigation={navigation} 
        />

    return (
        <>
            {
                showModal && (   
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <AntDesign name="close" size={27} onPress={() => onPress(false)} />
                        </View>
                        <View>
                            <Image style={{width: '100%', height: '70%', marginTop: 15, marginBottom: 10}} source={require('../../assets/qrcode.png')} />
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
        justifyContent: 'center'
    },
    modalHeader: {
        alignItems: 'flex-end',
        width: '100%',
    },
    item: {
        paddingVertical: 10
    }
});