import { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Navigator from '../../components/navigator';
import InputSearch from '../../components/inputSearch';
import RestaurantCard from '../../components/restaurantCard';

import { getData } from '../../services';

const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([{ name: 'Test', classification: 1.1, typePCD: ['visual'], address: 'Test Adress' }]);

  restaurants.map(element => console.log(element.name))

  const getRestaurants = async () => { 
    try {
      setIsLoading(true);
      const response = [{ name: 'Test', classification: 1.1, typePCD: ['visual'], address: 'Test Adress' }];
 
      setRestaurants(response);
    } catch { 
      alert('Erro durante a requisição');
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   getRestaurants();
  // }, []);
    return (
        <>
            <View style={{ flexDirection: 'column', height: '100%', backgroundColor: '#3154C5', paddingTop: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, paddingHorizontal: 20, alignItems: 'center' }} >
                    <InputSearch 
                        placeholder='Busque por restaurante' 
                        style={{ color: '#FFFF', borderBottomColor: 'rgba(255, 255, 255, 0.21)', borderBottomWidth: 2, width: '90%', paddingVertical: 10 }} 
                        placeholderTextColor="#FFFF"
                    />
                    <TouchableOpacity onPress={() => console.log('Find')}>
                      <Ionicons name="search" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#FFFF', paddingHorizontal: 20, height: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                  {
                    isLoading ? <ActivityIndicator size="small" color="#FFFF" />  : (
                      <ScrollView style={{ marginTop: 20 }}>
                        {/* {restaurants.map(({ name, classification, typePCD, address }) => {
                          <RestaurantCard
                            name={name}
                            classification={classification}
                            typePCD={typePCD}
                            address={address}
                          />
                        })} */}

                        <RestaurantCard
                            name='Test'
                            classification={1.2}
                            typePCD={['visual']}
                            address='Test Adress'
                          />
                      </ScrollView>
                    )
                  }
                </View>
            </View>
            <Navigator navigation={navigation} />
        </>
    );
};

export default Home;