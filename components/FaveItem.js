import { useContext, useState } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableHighlight,
  Text,
  Image,
  TextInput,
  Keyboard,
  Pressable
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import styles from "./Styles";
import React, { useRef } from "react";
import * as ImagePicker from "expo-image-picker";
import ItemContext from "../context/ItemContext";
import CustomButton from "./shared/CustomButton";
import { useNavigation } from "@react-navigation/native";
// import MovieDetail from "./screens/MovieDetail";

export default function FaveItem({
  id,
  image,
  title,
  description,
  release_date,
  vote_average
}) {
  const navigation = useNavigation();

  const { deleteItem, addItemToFaveList } = useContext(ItemContext);
  // Add Item Area

  // CLOSE SWIPEABLE

  const swipeableRef = useRef(null);

  // const handleCloseSwipe = () => {
  //   swipeableRef.current.close();
  // };

  //  EDIT SUBMIT

  // const handleUpdateItem = () => {
  //   // e.preventDefault();

  //   // if (editingId) {
  //   updateItem(id, {
  //     title: newTitle,
  //     description: newDescription,
  //     price: newPrice,
  //     quantity: newQuantity,
  //     image: selectedImage
  //   });
  //   // setItemList(newItemList);
  //   setEditingId(null);
  //   setNewDescription("");
  //   setNewTitle("");
  //   setNewPrice("");
  //   setNewQuantity("");
  //   setAddEditItemArea("none");
  //   handleCloseSwipe();
  //   // }
  // };

  // ADD TO CART

  // const handleAddToFaveList = () => {
  //   console.log("Add to Cart");

  //   const newItem = {
  //     title: title,
  //     description: description,
  //     image: image,
  //     release_date: release_date,
  //     vote_average: vote_average
  //   };

  //   addItemToFaveList(newItem);
  // };

  // const handleRedirect = (id) => {
  //   navigation.navigate("Movie Detail");
  // };

  const movie_url = "https://www.themoviedb.org/movie/";

  return (
    <>
      <View style={{ height: 18 }}></View>
      <Swipeable
        ref={swipeableRef}
        renderRightActions={() => (
          <View style={styles.deleteContainer}>
            <TouchableWithoutFeedback onPress={() => deleteItem(id)}>
              <MaterialCommunityIcons
                name="trash-can"
                size={34}
                color="red"
                style={styles.iconDel}
              ></MaterialCommunityIcons>
              <Text style={styles.iconText}>Delete</Text>
            </TouchableWithoutFeedback>
          </View>
        )}
      >
        <TouchableHighlight
          underlayColor={"#lightgrey"}
          // onPress={() => console.log("Item Selected", itemList)}
        >
          <>
            <View style={styles.mainContainerColumn1}>
              <Image
                style={styles.image}
                source={{ uri: `${image}` }}
                dataSet={{ media: styles.image }}
              />

              <Text
                style={[
                  styles.spaceAround3,
                  styles.inputText,
                  styles.titleBoldText
                ]}
              >
                {title}
              </Text>

              <View>
                <Text style={[styles.inputTextRight, styles.itemPropBoldText]}>
                  Rated:
                </Text>
                <Text style={[styles.itemProp, styles.inputTextRight]}>
                  {vote_average}
                </Text>

                <Text style={[styles.inputTextRight, styles.itemPropBoldText]}>
                  Release Date:
                </Text>
                <Text style={[styles.itemProp, styles.inputTextRight]}>
                  {release_date}
                </Text>
              </View>
            </View>
            {/* <View style={styles.containerColumn3}>
              <Text style={[styles.descBoldText, styles.descBack]}>
                Overview:
              </Text>
              <Text style={styles.description}>{description}</Text>
            </View> */}
            <View style={styles.addToCartWrap}>
              <Text style={styles.addToCartBtn}>Movie Details</Text>
            </View>
          </>
        </TouchableHighlight>
      </Swipeable>
    </>
  );
}
