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
import FaveItem from "../FaveItem";
import ItemContext from "../../context/ItemContext";
import styles from "../Styles";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

export default function FavoritesList() {
  const { favoritesListFB } = useContext(ItemContext);

  return (
    <>
      <SafeAreaView>
        <View style={{ backgroundColor: "#CBE7FC" }}>
          <View style={styles.addItemAreaHeader}>
            <Text style={styles.headerTitle}>Favorites List</Text>
            <MaterialCommunityIcons
              name="heart"
              color={"red"}
              size={30}
              style={{
                // display: addItemAreaBtn,
                alignSelf: "flex-end",
                zIndex: 5,
                marginTop: -29,
                right: 17,
                width: 50,
                height: 50
              }}
            />

            {/* <Materi
              name="FaHeart"
              size={29}
              color="#000"
              style={
                {
                  // display: addItemAreaBtn,
                  // alignSelf: "flex-end",
                  // zIndex: 5,
                  // marginTop: -26,
                  // right: 17,
                  // width: 50,
                  // height: 50
                }
              }
            /> */}
          </View>
          <FlatList
            data={favoritesListFB}
            keyExtractor={(favoritesListFB) => favoritesListFB.id}
            renderItem={({ item }) => (
              <FaveItem
                id={item.id}
                image={item.data.image}
                title={item.data.title}
                price={item.data.price}
                quantity={item.data.quantity}
                description={item.data.description}
                release_date={item.data.release_date}
                vote_average={item.data.vote_average}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
