import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

const Navigator = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
                <Ionicons name="home-outline" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('user')}>
                <Ionicons name="person-outline" size={32} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default Navigator;

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        borderWidth: 2,
        borderTopColor: '#868b95',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#3154C5'
    }
});