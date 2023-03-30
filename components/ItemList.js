import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
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

export default function ItemList({ itemList, setItemList, setSplashMessage }) {
  const addedItem = (newItem) => {
    (newItem.id = Math.floor(Math.random() * 300)),
      setItemList([newItem, ...itemList]);
  };

  return (
    <>
      <AddItem handleAdd={addedItem} setSplashMessage={setSplashMessage} />
      <FlatList
        data={itemList}
        keyExtractor={(itemList) => itemList.id}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            description={item.description}
            itemList={itemList}
            setItemList={setItemList}
          />
        )}
      />
    </>
  );
}
