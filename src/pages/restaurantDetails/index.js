import { View } from 'react-native';
import CardDetailRestaurant from '../../components/cardDetailRestaurant';
import Navigator from '../../components/navigator';
import BoxMenu from '../../components/boxMenu';
import BoxCalendar from '../../components/boxCalendar';
import ModalQrCode from '../../components/modalQrCode';
import { useState } from "react";
import { ScrollView } from 'react-native-gesture-handler';

const RestaurantDetails = ({ navigation }) => {
    return (
        <>
            <View>
                <CardDetailRestaurant
                    name={'Melts'}
                    classification={'0.0'}
                    typePCD={'visual'}
                    address={'Rua Horace Clark, 45'}
                />
            </View>
                <View style={{ height: '60%' }}>
                    <BoxMenu />
                    <BoxCalendar />
                </View>
        </>
    );
};

export default RestaurantDetails;