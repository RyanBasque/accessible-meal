import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'

const Item = ({ item, navigation }) => (
    <TouchableOpacity 
        style={styles.item} 
        onPress={() => navigation.navigate('createRestaurant', item)}
    >
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

const Modal = ({ showModal, itens, onPress, navigation }) => {
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
                        <TouchableOpacity onPress={() => navigation.navigate('createRestaurant')}>
                            <Text style={{ color: '#3154C5', marginBottom: 10 }}>Criar novo restaurante</Text>
                        </TouchableOpacity>
                        <FlatList
                            data={itens}
                            renderItem={renderItem}
                        />
                    </View>
                )
            }
        </>
    )
};

export default Modal;

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        position: 'absolute',
        height: 200,
        bottom: 0,
        backgroundColor: '#D9D9D9',
        padding: 20
    },
    modalHeader: {
        alignItems: 'flex-end',
        width: '100%',
    },
    item: {
        paddingVertical: 10
    }
});