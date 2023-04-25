import { useContext, useState } from "react";
import * as React from "react";
import { View, SafeAreaView, Text } from "react-native";
import Data from "./Data";
import styles from "./Styles";
import ItemList from "./ItemList";
import ItemContext from "../context/ItemContext";

export default function ShoppingList(
  title,
  description,
  price,
  image,
  quantity
) {
  const { itemListFB, editTask, updateTask, deleteTask } =
    useContext(ItemContext);

  // const [itemList, setItemsList] = useState(itemListFB);
  const [itemList, setItemList] = useState(Data);
  const [splashMessage, setSplashMessage] = useState("flex");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f1fc77" }}>
      <View>
        <ItemList
          itemList={itemList}
          setItemList={setItemList}
          setSplashMessage={setSplashMessage}
        />
      </View>
      <View style={[styles.flex1Center, { display: splashMessage }]}>
        <Text style={styles.flex1CenterChild}>
          Please use + Button to add items.
        </Text>
      </View>
    </SafeAreaView>
  );
}
