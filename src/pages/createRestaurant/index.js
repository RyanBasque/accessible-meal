import { useState } from "react";
import { 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    Text, 
    Image, 
    ScrollView 
} from "react-native";
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import AntDesign from '@expo/vector-icons/AntDesign'

import Navigator from "../../components/navigator";
import Input from "../../components/input";
import RadioButton from "../../components/radioButton";
import ButtonPrimary from "../../components/buttonPrimary";
import ButtonSecondary from "../../components/buttonSecondary";

const CreateRestaurant = ({ route, navigation }) => {
    const { params } = route;

    const [name, setName] = useState(params?.name || '');
    const [email, setEmail] = useState(params?.email || '');
    const [cnpj, setCnpj] = useState(params?.cnpj || '');
    const [address, setAddress] = useState(params?.address || '');
    const [typePCD, setTypePCD] = useState(params?.typePCD || []);
    const [menuPhoto, setMenuPhoto] = useState(undefined);

    const handlePutData = () => { 
        
    };

    const handleReset = () => {
        setEmail('');
        setName('');
        setCnpj('');
        setAddress('');
        setTypePCD([]);
        setMenuPhoto(undefined);
    };

    const handlePickPhoto = async () => {
        try {
            const result = await launchImageLibraryAsync({
                mediaTypes: MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                base64: true,
              });
          
              setMenuPhoto("data:image/png;base64," + result.base64);
        } catch {
            alert("Import Image Error");
        }
    };

    return (
        <>
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Image style={styles.img} source={require('../../../assets/logo.png')} />
                </View>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.userIconContainer}>
                    <View style={styles.userIcon}>
                        <AntDesign name="user" size={90} color="#3154C5" />
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.formInput}>
                        <Input 
                            textLabel="NOME DO RESTAURANTE" 
                            onChangeText={setName} 
                            defaultValue={name} />
                    </View>
                    <View style={styles.formInput}>
                        <Input 
                            textLabel="EMAIL" 
                            onChangeText={setEmail} 
                            defaultValue={email} />
                    </View>
                    <View style={styles.formInput}>
                        <Input 
                            textLabel="CNPJ" 
                            onChangeText={setCnpj} 
                            defaultValue={cnpj} />
                    </View>
                    <Text>DEFICIÊNCIAS SUPORTADAS</Text>
                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity style={styles.radio} onPress={() => setTypePCD(atual => [...atual, 'visual'])}>
                            <RadioButton selected={typePCD.includes('visual')} />
                            <Text>Deficiência visual</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.radio} onPress={() => setTypePCD(atual => [...atual, 'motora'])}>
                            <RadioButton selected={typePCD.includes('motora')} />
                            <Text>Deficiência motora</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.radio} onPress={() => setTypePCD(atual => [...atual, 'mental'])}>
                            <RadioButton selected={typePCD.includes('mental')} />
                            <Text>Deficiência mental</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.radio} onPress={() => setTypePCD(atual => [...atual, 'auditiva'])}>
                            <RadioButton selected={typePCD.includes('auditiva')} />
                            <Text>Deficiência auditiva</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity style={{ width: '100%', height: 40, marginVertical: 12, borderBottomWidth: 1, color: 'black' }} onPress={handlePickPhoto}>
                            <Text>CARDÁPIO</Text>
                            <Image source={{ uri: menuPhoto }} style={styles.photo} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <Input 
                            textLabel="ENDEREÇO" 
                            onChangeText={setAddress} 
                            defaultValue={address} />
                    </View>
                    <View style={styles.formInput}>
                        <Input textLabel="SENHA" />
                    </View>
                    <View style={styles.formInput}>
                        <Input textLabel="CONFIRME SUA SENHA" />
                    </View>
                    <ButtonPrimary text="CONTINUAR" onPress={handlePutData} />
                    <ButtonSecondary text="CANCELAR" onPress={handleReset} />
                </View>
            </ScrollView>
            <Navigator navigation={navigation} />
        </>
    );
};

export default CreateRestaurant;

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
        position: 'relative',
    },
    radio: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    photo: {
        width: 20, 
        height: 20,
        position: 'absolute',
        top: 10,
        right: 0,
        borderRadius: 100
    }
});