import { View, StyleSheet } from "react-native";

const Navigator = ({ navigation }) => {

    return (
        <View style={styles.container}>

        </View>
    );
};

export default Navigator;

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-around',
    }
});