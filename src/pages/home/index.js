import { View } from 'react-native';
import Navigator from '../../components/navigator';
import SearchBar from '../../components/searchBar';
import ListRestaurant from '../../components/listRestaurant';
import ButtonBot from '../../components/buttonBot';

const Home = ({ navigation }) => {

    return (
        <>  
            <View style={{display: 'flex', flexDirection: 'row', marginTop: '10px', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                <SearchBar />
                <ButtonBot onPress={() => navigation.navigate('bot')} />
            </View>
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                <ListRestaurant />
            </View>
            <Navigator navigation={navigation} />
        </>
    );
};

export default Home;