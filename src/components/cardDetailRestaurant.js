import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ItensList = ({ typePCD }) => {
  return (
      <>
        {
          typePCD.length < 4 ? typePCD.map((item, index) => {
            return (
              <>
                <Text style={{ marginRight: 5, marginLeft: 5, color: '#FFFF', fontWeight: '500' }}>{item}</Text>
                {
                  (typePCD.length - 1) !== index ? <Text style={{ color: '#FFFF' }}>·</Text> : <></>
                } 
              </>
            )
          }) : <Text style={{ marginRight: 5, marginLeft: 5 }}>Todos</Text>
        }
      </>
  )
}

const CardDetailRestaurant = ({ name, classification, typePCD, address }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 4,
        paddingTop: 30,
        marginHorizontal: 16,
        marginTop: 0,
        marginBottom: 20
      }}>
      <View
        style={{
          width: 85,
          height: 85,
          backgroundColor: '#ffff',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
        }}>
        <Image style={styles.img} source={require('../../assets/logoRestaurante4.png')} />
      </View>
      <View
        style={{
          flex: 3,
          flexDirection: 'column'
        }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: '600', fontSize: 15, color: '#FFFF' }}>
            {name}
          </Text>
        </View>
        <View style={{ marginBottom: 10, flexDirection: 'row', marginTop: 5 }}>
            <Ionicons name="heart-outline" size={14} color='#F76647' style={{ marginRight: 5 }} />
            <Text style={{ marginRight: 5, color: '#F76647' }}>
              {classification}
            </Text>
            <Text>·</Text>
            <ItensList typePCD={typePCD} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
          <Ionicons name="locate" color="#FFFF" size={14} />
          <Text style={{ marginLeft: 5, fontWeight: '500', color: '#FFFF' }}>
            {address}
          </Text>
        </View>
      </View>
    </View>
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
    width: 60,
    height: 60,
    marginLeft: 5,
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


export default CardDetailRestaurant;