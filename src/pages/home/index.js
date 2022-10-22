import { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Navigator from "../../components/navigator";
import InputSearch from "../../components/inputSearch";
import RestaurantCard from "../../components/restaurantCard";

import { getData } from "../../services";

const Home = ({ navigation }) => {
  const [isLoading] = useState(false);

  const [restaurants] = useState([
    {
      name: "Restaurante Bom Prato",
      classification: 4.1,
      typePCD: ["Visual", "Mental", "Motora"],
      address: "Avenida Paulista, 40",
      profilePic: require("../../../assets/r1.jpeg"),
    },
    {
      name: "Fogão a lenha",
      classification: 3.1,
      typePCD: ["Visual", "Motora"],
      address: "Boa Vista, 75",
      profilePic: require("../../../assets/r2.png"),
    },
    {
      name: "Delícias na panela - Vila Prudente",
      classification: 5.3,
      typePCD: [0, 1, 2, 3, 4],
      address: " Rua Vicentina de Luca, 171",
      profilePic: require("../../../assets/r3.jpeg"),
    },
    {
      name: "Jogo de panela - Paulista",
      classification: 3.3,
      typePCD: ["Visual", "Mental"],
      address: "Rua Uberaba, 105",
      profilePic: require("../../../assets/r4.png"),
    },
    {
      name: "Recanto da comida caseira",
      classification: 1.1,
      typePCD: ["Visual", "Mental", "Motora"],
      address: "Rua Roselândia, 1200",
      profilePic: require("../../../assets/r5.png"),
    },
    {
      name: "Sapore Italiano",
      classification: 6.0,
      typePCD: ["Motora"],
      address: "Rua Miraceu, 941",
      profilePic: require("../../../assets/r6.png"),
    },
    {
      name: "Palatare",
      classification: 2.8,
      typePCD: [0, 1, 2, 3, 4],
      address: " Rua Henrique Leonessa, 530",
      profilePic: require("../../../assets/r7.png"),
    },
    {
      name: "Massas & Sabores",
      classification: 5.3,
      typePCD: ["Visual", "Mental", "Motora"],
      address: "Travessa Antônio Gimenes, 1855",
      profilePic: require("../../../assets/r8.png"),
    },
  ]);
  const [filteredsRestaurants, setFilteredRestaurants] = useState([]);

  const filterRestaurant = (name) => {
    const filteredRestaurants = restaurants.filter((element) =>
      element.name.toLowerCase().startsWith(name.toLowerCase())
    );

    setFilteredRestaurants(filteredRestaurants);
  };

  const isFiltered = filteredsRestaurants.length
    ? filteredsRestaurants
    : restaurants;

  return (
    <>
      <ScrollView
        style={{
          flexDirection: "column",
          height: "100%",
          backgroundColor: "#3154C5",
          paddingTop: 10,
          paddingBottom: 150,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 20,
            paddingHorizontal: 20,
            alignItems: "center",
          }}
        >
          <InputSearch
            placeholder="Busque por restaurante"
            onChangeText={filterRestaurant}
            style={{
              color: "#FFFF",
              borderBottomColor: "rgba(255, 255, 255, 0.21)",
              borderBottomWidth: 2,
              width: "90%",
              paddingVertical: 10,
            }}
            placeholderTextColor="#FFFF"
          />
          <TouchableOpacity onPress={() => console.log("Find")}>
            <Ionicons name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#FFFF",
            paddingHorizontal: 20,
            height: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingBottom: 100,
          }}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#FFFF" />
          ) : (
            <ScrollView style={{ marginTop: 20 }}>
              {isFiltered.map(
                (
                  { name, classification, typePCD, address, profilePic },
                  index
                ) => (
                  <RestaurantCard
                    key={index}
                    name={name}
                    classification={classification}
                    typePCD={typePCD}
                    address={address}
                    profilePic={profilePic}
                  />
                )
              )}
            </ScrollView>
          )}
        </View>
      </ScrollView>
      <Navigator navigation={navigation} />
    </>
  );
};

export default Home;
