import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ItensList = ({ typePCD }) => {
  return (
      <>
        {
          typePCD.length < 4 ? typePCD.map((item, index) => {
            return (
              <>
                <Text style={{ marginRight: 5, marginLeft: 5, color: '#949494', fontWeight: '500' }}>{item}</Text>
                {
                  (typePCD.length - 1) !== index ? <Text>·</Text> : <></>
                } 
              </>
            )
          }) : <Text style={{ marginRight: 5, marginLeft: 5 }}>Todos</Text>
        }
      </>
  )
}

const RestaurantCard = ({ name, classification, typePCD, address, profilePic }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('restaurantDetails', { name, classification, typePCD, address, profilePic })}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        padding: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#949494'
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Image style={styles.img} source={profilePic} />
      </View>
      <View
        style={{
          flex: 3,
          flexDirection: 'column'
        }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: '600', fontSize: 15, color: '#313131' }}>
            {name}
          </Text>
        </View>
        <View style={{ marginBottom: 10, flexDirection: 'row' }}>
            <Ionicons name="heart-outline" size={14} color='#F76647' style={{ marginRight: 5 }} />
            <Text style={{ marginRight: 5, color: '#F76647' }}>
              {classification}
            </Text>
            <Text>·</Text>
            <ItensList typePCD={typePCD} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="locate" color="#3154C5" size={14} />
          <Text style={{ marginLeft: 5, fontWeight: '500', color: '#949494' }}>
            {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    marginTop: 55,
    overflow: 'hidden',
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
  },
  img: {
    width: 50,
    height: 50,
    marginLeft: 5
  },
  subTitle: {
    fontSize: 22,
    marginTop: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '110%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  radio: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});


export default RestaurantCard;