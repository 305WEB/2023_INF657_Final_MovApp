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

import AddItem from "./AddItem";
import Item from "./Item";
import ItemContext from "../context/ItemContext";

export default function ItemsList({ setSplashMessage }) {
  const { itemListFB } = useContext(ItemContext);

  return (
    <>
      <AddItem />
      <FlatList
        data={itemListFB}
        keyExtractor={(itemListFB) => itemListFB.id}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            image={item.data.image}
            title={item.data.title}
            price={item.data.price}
            quantity={item.data.quantity}
            description={item.data.description}
          />
        )}
      />
    </>
  );
}
