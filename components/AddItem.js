import React from "react";
import { useState, useEffect } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableHighlight,
  Text,
  Image,
  Button,
  TextInput,
  Keyboard,
  ImageBackground
} from "react-native";
import Data from "./Data";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import styles from "./Styles";

export default function AddItem({ handleAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  // Add Item Area

  const [addItemArea, setAddItemArea] = useState("none");

  // Add Item Area

  const [addItemAreaBtn, setAddItemAreaBtn] = useState("block");

  // Add New Item Button

  const [addItemBtn, setAddItemBtn] = useState("flex");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      title.length !== 0 &&
      price.length !== 0 &&
      quantity.length !== 0 &&
      description.trim().length > 5
    ) {
      const newItem = {
        title: title,
        description: description,
        price: price,
        quantity: quantity,
        image: "https://picsum.photos/150"
        // image: require("./../assets/icon.png")
      };

      handleAdd(newItem);
      setTitle("");
      setDescription("");
      setPrice("");
      setQuantity("");
      // addNewItemBtn();
      setAddItemArea("none");
      setAddItemAreaBtn("block");

      Keyboard.dismiss();
    } else {
      alert(
        "Please enter more than 5 Characters in description and complete all fields."
      );
    }
  };

  const AddNewItemArea = () => {
    setAddItemArea("flex");
    setAddItemAreaBtn("none");
  };

  const image = {
    uri: "https://cdn6.f-cdn.com/contestentries/1397912/17268448/5b7b6950e0845_thumb900.jpg"
  };

  // const addNewItemBtn = () => {
  //   setAddItemBtn("none");
  // };

  // EDIT ----------------------------------------------------------

  // const [itemEdit, setItemEdit] = useState({
  //   item: {},
  //   edit: false
  // });

  // useEffect(() => {

  //   if (itemEdit.edit === true) {

  //     setTitle(itemEdit.item.title);

  //     setDescription(itemEdit.item.description);
  //   }
  // }, [itemEdit]);

  // const editItem = (id, item) => {
  //   setItemEdit({ id, item, edit: true });
  // };

  // const deleteItem = (id) => {
  //   setItemList(itemList.filter((item) => item.id !== id));
  // };

  return (
    <View>
      <ImageBackground
        source={image}
        resizeMode="contain"
        style={[styles.addItemAreaHeader]}
        imageStyle={{
          resizeMode: "contain",
          alignSelf: "flex-start"
        }}
      >
        {/* <Button title="Add New Item" onPress={AddNewItemArea}></Button> */}

        <TouchableWithoutFeedback
          onPress={AddNewItemArea}
          style={{
            display: addItemAreaBtn,
            position: "fixed",
            alignSelf: "flex-end",

            right: 25
          }}
        >
          <FontAwesome name="plus" size={34} color="black" />
        </TouchableWithoutFeedback>
      </ImageBackground>
      {/* addItemArea below refers to state var */}
      <View style={{ display: addItemArea, marginTop: 30 }}>
        <TextInput
          style={[styles.formField]}
          onChangeText={(value) => setTitle(value)}
          type="text"
          placeholder="    Item Title"
          value={title}
        />

        <TextInput
          style={[styles.formField]}
          onChangeText={(value) => setDescription(value)}
          type="text"
          placeholder="    Description (+5 Chars)"
          value={description}
        />

        <TextInput
          style={[styles.formField]}
          onChangeText={(value) => setPrice(value)}
          placeholder="    Item Price"
          value={price}
          keyboardType="numeric"
        />

        <TextInput
          style={[styles.formField]}
          onChangeText={(value) => setQuantity(value)}
          placeholder="    Quantity"
          value={quantity}
          keyboardType="numeric"
        />

        <Button onPress={handleSubmit} title="Add Item"></Button>
      </View>
    </View>
  );
}
