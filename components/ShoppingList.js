import { useState } from "react";
import * as React from "react";
import {
  TextInput,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView
} from "react-native";
import StyleSheet from "react-native-media-query";
import Data from "./Data";
import styles from "./Styles";
import ItemList from "./ItemList";

export default function ShoppingList(
  title,
  description,
  price,
  image,
  quantity
) {
  const [itemList, setItemList] = useState(Data);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <ItemList itemList={itemList} setItemList={setItemList} />
      </View>
    </SafeAreaView>
  );
}
