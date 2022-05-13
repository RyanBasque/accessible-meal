import { View, Image, StyleSheet, Text } from 'react-native';

import { styles } from './styles';

import Input from '../../components/input';
import ButtonPrimary from '../../components/buttonPrimary';
import ButtonSecondary from '../../components/buttonSecondary';

const Login = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/logo.png')} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Entrar com seus dados</Text>
            </View>
            <View style={styles.inputContainer}>
                <Input placeholder="Digite seu email" />
                <Input placeholder="Digite sua senha" />
            </View>
            <View style={styles.buttonContainer}>
                <ButtonPrimary text="ENTRAR" isActive={true} />
                <View style={{ marginTop: 30 }}>
                    <ButtonSecondary text="CRIAR CONTA" />
                </View>
            </View>
        </View>
    );
}

const teste = StyleSheet.create({

    a: {
        marginTop: 90
    }
})

export default Login;