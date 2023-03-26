import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableHighlight,
  Text,
  Image
} from "react-native";
import Data from "./Data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import styles from "./Styles";

export default function Item({
  id,
  image,
  title,
  price,
  quantity,
  description,
  itemList,
  setItemList
}) {
  // DELETE
  const deleteItem = (id) => {
    setItemList(itemList.filter((item) => item.id !== id));
  };
  return (
    // <View style={styles.mainContainerColumn1}>
    <Swipeable
      renderRightActions={() => (
        <View style={styles.deleteContainer}>
          <TouchableWithoutFeedback onPress={() => deleteItem(id)}>
            <MaterialCommunityIcons name="trash-can" size={34} color="black" />
          </TouchableWithoutFeedback>
        </View>
      )}
      renderLeftActions={() => (
        <View style={styles.editContainer}>
          <TouchableWithoutFeedback onPress={() => deleteItem(id)}>
            <AntDesign name="edit" size={34} color="black" />
          </TouchableWithoutFeedback>
        </View>
      )}
    >
      <TouchableHighlight
        underlayColor={"#lightgrey"}
        onPress={() => console.log("Item Selected", itemList)}
      >
        <>
          <View
            style={[styles.mainContainerColumn1, styles.card, styles.elevation]}
          >
            <Image
              style={[styles.image]}
              source={{ uri: `${image}` }}
              dataSet={{ media: styles.image }}
            />

            <Text style={[styles.spaceAround3, styles.inputText]}>{title}</Text>
          </View>
          <Text style={[styles.spaceAround3, styles.inputText]}>
            Units: {quantity}
          </Text>
          <Text style={[styles.spaceAround3, styles.inputText]}>
            Price: ${price}
          </Text>
          <View style={[styles.card]}>
            <Text style={[styles.spaceAround3, styles.description]}>
              Description: {description}
            </Text>
          </View>
        </>
      </TouchableHighlight>
    </Swipeable>
    // </View>
  );
}
