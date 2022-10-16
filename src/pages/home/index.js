import { View, FlatList, ScrollView, Text } from 'react-native';
import Navigator from '../../components/navigator';
// import { RobotOutlined } from '@ant-design/icons';
import AntDesign from '@expo/vector-icons/AntDesign'

import InputSearch from '../../components/inputSearch'
import Header from '../../components/header'
import HomeRestaurantModal from '../../components/homeRestaurantModal'
import { useState } from 'react';
import axios from "axios";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {

    const [name, setName] = useState('');
    const [typePCD, setTypePCD] = useState('');
    const [address, setAddress] = useState('');
    const [restaurantList, setRestaurantList] = useState([]);
    const api = axios.create({ baseURL: 'http://10.0.2.2:8080', })

    const loadRestaurants = async () => {
        try {
            let req = await api.get('/api/restaurante/').then(
                function (response) {
                    var jsonData = JSON.parse(response);
                    for (var i = 0; i < jsonData.data.length; i++) {
                        var restaurant = jsonData.data[i];
                        setRestaurantList(atual => [...atual, restaurant])
                    }
                }
            )
        } catch (err) {
            alert('Falha ao resgatar os restaurantes cadastrados')
            console.log(err)
        }
    }
    return (
        <>
            <View style={{ flexDirection: 'column', paddingHorizontal: 20, height: '100%' }}>
                <Header />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <InputSearch placeholder={'Busque por restaurante'} />
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('chatbot')}>
                        <AntDesign name="plus" size={25} color="#3154C5" />
                        {/* <RobotOutlined /> */}
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <HomeRestaurantModal
                        name={'Melts'}
                        classification={'0.0'}
                        typePCD={'visual'}
                        address={'Rua Horace Clark, 45'} />
                    <HomeRestaurantModal
                        name={'Cantareira Ltda'}
                        classification={'0.0'}
                        typePCD={'mental'}
                        address={'Rua Orlando de Morais, 1010'} />
                    <HomeRestaurantModal
                        name={'Food True'}
                        classification={'0.0'}
                        typePCD={'motora'}
                        address={'Av Nazaréh, 2456'} />
                    <HomeRestaurantModal
                        name={'Saborosos Pratos Ltda'}
                        classification={'0.0'}
                        typePCD={'auditiva'}
                        address={'Av Santos Silva, 81'} />
                    <HomeRestaurantModal
                        name={'Delicias Casa da Vovó Ltda'}
                        classification={'0.0'}
                        typePCD={'auditiva'}
                        address={'Av Santos Silva, 81'} />
                    <HomeRestaurantModal
                        name={'Restaurante da cidade'}
                        classification={'0.0'}
                        typePCD={'auditiva'}
                        address={'Av Santos Silva, 81'} />
                </ScrollView>
                {/* <FlatList
                    data={restaurantList}
                    renderItem={(obj) => (
                      <HomeRestaurantModal {...obj} />
                    )}
                /> */}
            </View>
            <Navigator navigation={navigation} />
        </>
    );
};

export default Home;