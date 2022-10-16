import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function BoxMenu() {
    return (
            <View style={[styles.card]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Cardápio</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#3154C5', marginBottom: 10 }}>Ouvir</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image style={{ width: '100%', height: '85%'}} source={require('../../assets/cardapio.jpg')} />
                </View>
            </View>
    );
};

export default BoxMenu;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
        marginBottom: 0
    }
});  