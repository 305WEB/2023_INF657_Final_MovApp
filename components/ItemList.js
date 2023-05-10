import React from "react";
import { useContext, useState } from "react";
import {
  ScrollView,
  TouchableWithoutFeedback
} from "react-native-gesture-handler";
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableHighlight,
  Text,
  Image
} from "react-native";
import Item from "./Item";
import ItemContext from "../context/ItemContext";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import styles from "./Styles";

const ItemList = ({ navigation }) => {
  const { movieData } = useContext(ItemContext);

  let img_path = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#e0fff7" }}>
        <View style={styles.addItemAreaHeader}>
          <Text style={styles.headerTitle}>Movie List</Text>
          <MaterialCommunityIcons
            name="filmstrip"
            color={"black"}
            size={35}
            style={{
              // display: addItemAreaBtn,
              alignSelf: "flex-end",
              zIndex: 5,
              marginTop: -37,
              right: 17,
              width: 50,
              height: 50
            }}
          />
        </View>
        <FlatList
          data={movieData}
          keyExtractor={(movieData) => movieData.id}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              image={img_path + item.poster_path}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              description={item.overview}
              release_date={item.release_date}
              vote_average={item.vote_average}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default ItemList;
