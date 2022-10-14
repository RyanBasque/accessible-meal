import { View } from 'react-native';
import CardRestaurant from '../../components/cardRestaurant';
import Navigator from '../../components/navigator';

const Restaurant = ({ navigation }) => {

    return (
        <>  
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                <CardRestaurant />
            </View>
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center',width: '100%'} }>
       
            </View>
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center',width: '100%'} }>
       
            </View>
            <Navigator navigation={navigation} />
        </>
    );
};

export default Restaurant;