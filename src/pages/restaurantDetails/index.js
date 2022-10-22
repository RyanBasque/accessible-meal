import { View, ScrollView } from 'react-native';

import CardDetailRestaurant from '../../components/cardDetailRestaurant';
import BoxMenu from '../../components/boxMenu';
import BoxCalendar from '../../components/boxCalendar';
import ModalQrCode from '../../components/modalQrCode';

const RestaurantDetails = ({ navigation, route: { params } }) => {
    return (
        <ScrollView style={{ backgroundColor: '#3154C5', paddingBottom: 20 }}>
          <View>
            <CardDetailRestaurant
              name={params.name}
              classification={params.classification}
              typePCD={params.typePCD}
              address={params.address}
            />
          </View>
          <View style={{ backgroundColor: '#FFFF', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
            <BoxMenu />
            <BoxCalendar />
          </View>
        </ScrollView>
    );
};

export default RestaurantDetails;