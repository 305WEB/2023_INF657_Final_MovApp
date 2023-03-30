import { useState } from "react";
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
import Data from "./Data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import styles from "./Styles";
import React, { useRef } from "react";
import * as ImagePicker from "expo-image-picker";

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
  // Add Item Area

  const [editItemArea, setEditItemArea] = useState("none");

  // Add Item Area

  const [addEditItemArea, setAddEditItemArea] = useState("none");

  // State Var holds Edited item ID
  const [editingId, setEditingId] = useState(null);

  const [newTitle, setNewTitle] = useState(null);

  const [newDescription, setNewDescription] = useState(null);

  const [newPrice, setNewPrice] = useState(null);

  const [newQuantity, setNewQuantity] = useState(null);

  // Editing Input Fields back color
  const [backColor, setBackColor] = useState("#fff");

  // IMAGE PICKER ----------------------
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    Keyboard.dismiss();
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  const imageSource =
    selectedImage !== null
      ? { uri: selectedImage }
      : {
          uri: "https://www.fhsu.edu/_files/images/fort-hays-state-university.svg"
        };

  // DELETE ITEM
  const deleteItem = (id) => {
    setItemList(itemList.filter((item) => item.id !== id));
  };

  // EDIT ITEM

  // EDIT

  const handleEdit = (id) => {
    setAddEditItemArea("flex");
    setEditingId(id);
    setBackColor("cyan");
    swipeableRef.current.close();
  };

  const handleCloseAddItemArea = () => {
    setAddEditItemArea("none");
  };

  // CLOSE SWIPEABLE

  const swipeableRef = useRef(null);

  const handleCloseSwipe = () => {
    swipeableRef.current.close();
  };

  //  EDIT SUBMIT

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItemList = itemList.map((item) =>
      item.id === editingId
        ? {
            ...item,
            title: newTitle,
            description: newDescription,
            price: newPrice,
            quantity: newQuantity,
            image: selectedImage
          }
        : item
    );
    setItemList(newItemList);
    setEditingId(null);
    setNewDescription("");
    setNewTitle("");
    setNewPrice("");
    setNewQuantity("");
    setAddEditItemArea("none");
    handleCloseSwipe();
  };

  return (
    <>
      <View style={{ height: 24 }}></View>
      <Swipeable
        ref={swipeableRef}
        renderRightActions={() => (
          <View style={styles.deleteContainer}>
            <TouchableWithoutFeedback onPress={() => deleteItem(id)}>
              <MaterialCommunityIcons name="trash-can" size={34} color="red" />
            </TouchableWithoutFeedback>
          </View>
        )}
        renderLeftActions={() => (
          <View style={styles.editContainer}>
            <TouchableWithoutFeedback onPress={() => handleEdit(id)}>
              <AntDesign name="edit" size={34} color="#393c1c" />
            </TouchableWithoutFeedback>
          </View>
        )}
      >
        <TouchableHighlight
          underlayColor={"#lightgrey"}
          onPress={() => console.log("Item Selected", itemList)}
        >
          <>
            <View style={[styles.mainContainerColumn1]}>
              <Image
                style={styles.image}
                source={{ uri: `${image}` }}
                dataSet={{ media: styles.image }}
              />

              <Text
                style={[
                  styles.spaceAround3,
                  styles.inputText,
                  styles.descBoldText
                ]}
              >
                {title}
              </Text>
              <View>
                <Text style={[styles.inputTextRight, styles.itemPropBoldText]}>
                  Price:
                </Text>
                <Text style={[styles.itemProp, styles.inputTextRight]}>
                  ${price}
                </Text>

                <Text style={[styles.inputTextRight, styles.itemPropBoldText]}>
                  Units:
                </Text>
                <Text style={[styles.itemProp, styles.inputTextRight]}>
                  {quantity}
                </Text>
              </View>
            </View>
            <View style={styles.containerColumn3}>
              <Text style={[styles.descBoldText, styles.descBack]}>
                Description:
              </Text>
              <Text style={[styles.description]}>{description}</Text>
            </View>
          </>
        </TouchableHighlight>
      </Swipeable>

      <View
        style={{
          display: addEditItemArea,
          marginTop: 10,
          backgroundColor: "#f6fda9",
          paddingTop: 40
        }}
      >
        <View style={styles.flex1Center}>
          <TextInput
            style={styles.formField}
            placeholderTextColor="#053B62"
            value={newTitle}
            onChangeText={setNewTitle}
            placeholder="    New Title"
          />
          <TextInput
            style={styles.formField}
            placeholderTextColor="#053B62"
            value={newDescription}
            onChangeText={setNewDescription}
            placeholder="    New Description"
          />

          <TextInput
            style={styles.formField}
            placeholderTextColor="#053B62"
            onChangeText={setNewPrice}
            placeholder="   New Price"
            value={newPrice}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.formField}
            placeholderTextColor="#053B62"
            onChangeText={setNewQuantity}
            placeholder="   New Quantity"
            value={newQuantity}
            keyboardType="numeric"
          />

          <Pressable
            style={[styles.button, { marginTop: 13 }]}
            onPress={pickImageAsync}
          >
            <Text style={styles.buttonText}>Edit Image</Text>
          </Pressable>

          <Image
            source={imageSource}
            resizeMode="contain"
            style={styles.selectedPhoto}
          />
        </View>
        <View style={styles.flexRowEnd}>
          <Pressable style={styles.button} onPress={handleCloseAddItemArea}>
            <Text style={[styles.buttonText, { marginBottom: 50 }]}>
              Cancel
            </Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={[styles.buttonText, { marginBottom: 50 }]}>
              Submit
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
