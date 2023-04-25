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
import CartItem from "../cart/CartItem";
import ItemContext from "../../context/ItemContext";
import styles from "../Styles";

export default function ShoppingCart() {
  const { cartListFB } = useContext(ItemContext);

  return (
    <>
      <SafeAreaView>
        <View style={{ backgroundColor: "#f1fc77" }}>
          <Text style={styles.headerTitle}>Shopping Cart</Text>
          <FlatList
            data={cartListFB}
            keyExtractor={(cartListFB) => cartListFB.id}
            renderItem={({ item }) => (
              <CartItem
                id={item.id}
                image={item.data.image}
                title={item.data.title}
                price={item.data.price}
                quantity={item.data.quantity}
                description={item.data.description}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
