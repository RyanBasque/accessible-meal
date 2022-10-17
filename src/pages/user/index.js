import { useReducer, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign'

import { useAuth } from "../../context/userContext";

import Navigator from "../../components/navigator";
import Input from "../../components/input";
import RadioButton from "../../components/radioButton";
import ButtonPrimary from "../../components/buttonPrimary";
import ButtonSecondary from "../../components/buttonSecondary";
import Modal from "../../components/modal";

const User = ({ navigation }) => {
    const { user } = useAuth();

    const [typePCD, setTypePCD] = useState([]);
    const [password, setPassword] = useState();
    const [showModal, setShowModal] = useState(false);
    const [restaurantList] = useState([
        /*{ name: 'Restaurante do Seu Zé', key: 10823, email: 'seuze@gmail.com', typePCD: ['visual'], adress: 'Rua Mataripe Joaquim, 42' },
        { name: 'Restaurante Colheita Feliz', key: 1082, email: 'colheitaFeliz@gmail.com', typePCD: ['visual', 'motora', 'mental'], adress: 'Rua Mataripe Joaquim, 42' },*/
    ])

    const handlePutData = () => {

    };

    const handleReset = () => {

    };

    return (
        <>
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Image style={styles.img} source={require('../../../assets/logo.png')} />
                </View>
                <TouchableOpacity style={styles.plusIcon} onPress={() => setShowModal(true)}>
                    <AntDesign name="plus" size={25} color="#3154C5" />
                </ TouchableOpacity>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.userIconContainer}>
                    <View style={styles.userIcon}>
                        <AntDesign name="user" size={90} color="#3154C5" />
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.formInput}>
                        <Input textLabel="NOME" defaultValue={user.name || ""} />
                    </View>
                    <View style={styles.formInput}>
                        <Input textLabel="EMAIL" defaultValue={user.email || ""} />
                    </View>
                    <Text>DEFICIÊNCIA</Text>
                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity
                            style={styles.radio} 
                            onPress={() => setTypePCD(atual => [...atual, 'visual'])}
                        >
                            <RadioButton selected={user?.typePCD.includes('visual') ||  typePCD.includes('visual')} />
                            <Text>Deficiência visual</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.radio} 
                            onPress={() => setTypePCD(atual => [...atual, 'motora'])}
                        >
                            <RadioButton selected={user?.typePCD.includes('motora') ||  typePCD.includes('motora')} />
                            <Text>Deficiência motora</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.radio} onPress={() => setTypePCD(atual => [...atual, 'mental'])}>
                            <RadioButton selected={user?.typePCD.includes('mental') ||  typePCD.includes('mental')} />
                            <Text>Deficiência mental</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.radio} onPress={() => setTypePCD(atual => [...atual, 'auditiva'])}>
                            <RadioButton selected={user?.typePCD.includes('auditiva') ||  typePCD.includes('auditiva')} />
                            <Text>Deficiência auditiva</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <Input 
                            secureTextEntry
                            placeholder="Senha"
                            onChangeText={setPassword} 
                            defaultValue={password}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <Input 
                            secureTextEntry
                            placeholder="Confirme sua senha"
                            onChangeText={setPassword} 
                            defaultValue={password}
                        />
                    </View>
                    <ButtonPrimary text="CONTINUAR" onPress={handlePutData} />
                    <ButtonSecondary text="CANCELAR" onPress={handleReset} />
                </View>
            </ScrollView>
            <Navigator navigation={navigation} />
            <Modal
                navigation={navigation}
                showModal={showModal}
                itens={restaurantList}
                onPress={setShowModal}
            />
        </>
    );
};

export default User;

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: `row`,
    }, 
    logoContainer: {
        top: 20,
        width: '100%',
        position: 'absolute',
        justifyContent: `center`,
        alignItems: `center`,
        zIndex: 0,
        height: 10,
    },
    img: {
        width: 130,
        height: 38,
        marginTop: 20,
    },
    plusIcon: {
        top: 25,
        justifyContent: `center`,
        alignItems: `center`,
        zIndex: 1,
        position: 'absolute',
        right: 20,
    },
    container: {
        marginTop: 60,
        marginBottom: 60
    },
    userIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    userIcon: {
        width: 200,
        height: 200,
        backgroundColor: '#D9D9D9',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        paddingHorizontal: 30
    },
    formInput: {
        marginVertical: 10,
    },
    radio: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
});