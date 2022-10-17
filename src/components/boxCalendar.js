import { StyleSheet, View, Text, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ButtonPrimary from './buttonPrimary';
import { useState } from "react";
import ModalQrCode from './modalQrCode';

function BoxCalendar({navigation}) {

    const [showModal, setShowModal] = useState(false);
    return (
        <View style={[styles.card]}>
            {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Marcar Presença</Text>
            </View>
            <View>
                <Image source={require('../../assets/genericuser.png')} />
            </View> */}
            <View style={{marginTop: 15}}>
                <Text>Comentários</Text>
                <TextInput 
                style={{
                    backgroundColor: '#B9B9B9',
                    height: 60,
                    marginBottom: 10,
                    borderRadius: 10
                }}
                />
                <ButtonPrimary text="GERAR QR CODE" onPress={() => setShowModal(true)}/>
            </View>
            <View>
                <ModalQrCode
                    navigation={navigation}
                    showModal={showModal}
                    onPress={setShowModal}
                />
            </View>
        </View>

    );
};

export default BoxCalendar;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    }
});  