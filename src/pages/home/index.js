import { useCallback } from 'react';
import { View, FlatList, ScrollView } from 'react-native';

import Navigator from '../../components/navigator';
import InputSearch from '../../components/inputSearch'
import Header from '../../components/header'
import HomeRestaurantModal from '../../components/homeRestaurantModal'

import { getData } from '../../services';

const Home = ({ navigation }) => {

    const restaurants = useCallback(async () => {
        try {
            const { data: restaurantList } = await getData('/api/restaurante/');

            return JSON.parse(restaurantList);
        } catch {
            alert('Falha ao resgatar os restaurantes cadastrados')

            return [];
        }
    }, []);


    return (
        <>
            <View style={{ flexDirection: 'column', paddingHorizontal: 20, height: '100%' }}>
                <Header />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <InputSearch placeholder={'Busque por restaurante'} />
                </View>
                <ScrollView>
                    {
                        restaurants.length ? restaurants.map(({ id, name, address, typePCD }) => {
                            return (
                                <HomeRestaurantModal
                                    name={name}
                                    classification={'0.0'}
                                    typePCD={'visual'}
                                    address={address} 
                                    key={id}
                                />
                            )
                        }) : <></>
                    }
                </ScrollView>
            </View>
            <Navigator navigation={navigation} />
        </>
    );
};

export default Home;
