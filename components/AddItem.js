import React from "react";
import { useState, useEffect } from "react";
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
  ImageBackground,
  Pressable
} from "react-native";
import Data from "./Data";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import styles from "./Styles";
import * as ImagePicker from "expo-image-picker";

export default function AddItem({ handleAdd, setSplashMessage }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  // Add Item Area

  const [addItemArea, setAddItemArea] = useState("none");

  // Add Item Area

  const [addItemAreaBtn, setAddItemAreaBtn] = useState("flex");

  // Add New Item Button

  const [addItemBtn, setAddItemBtn] = useState("flex");

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

  // ----------------------

  // SUBMIT

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (
    //   title.length !== 0 &&
    //   price.length !== 0 &&
    //   quantity.length !== 0 &&
    //   description.trim().length > 5
    // ) {
    const newItem = {
      title: title,
      description: description,
      price: price,
      quantity: quantity,
      image: selectedImage
    };

    handleAdd(newItem);
    setTitle("");
    setDescription("");
    setPrice("");
    setQuantity("");
    // addNewItemBtn();
    setAddItemArea("none");
    setAddItemAreaBtn("flex");

    Keyboard.dismiss();
    // } else {
    //   alert(
    //     "Please enter more than 5 Characters in description and complete all fields."
    //   );
    // }
  };

  const AddNewItemArea = () => {
    setAddItemArea("flex");
    setAddItemAreaBtn("none");
    setSplashMessage("none");
  };

  const handleCloseAddItemArea = () => {
    setAddItemArea("none");
    setAddItemAreaBtn("flex");
    setSplashMessage("flex");
  };

  return (
    <View>
      <View style={styles.addItemAreaHeader}>
        <Text style={styles.headerTitle}>ShoppingList</Text>

        <FontAwesome
          name="plus"
          size={29}
          color="#000"
          onPress={AddNewItemArea}
          style={{
            display: addItemAreaBtn,
            alignSelf: "flex-end",
            zIndex: 5,
            marginTop: -26,
            right: 17,
            width: 50,
            height: 50
          }}
        />
      </View>

      {/* addItemArea below refers to state var */}
      <View
        style={{
          display: addItemArea,
          marginTop: 30,
          backgroundColor: "#f6fda9",
          // backgroundColor: "#effda9",
          paddingTop: 40
        }}
      >
        <View style={styles.flex1Center}>
          <TextInput
            style={styles.formField}
            placeholderTextColor="#053B62"
            onChangeText={(value) => setTitle(value)}
            type="text"
            placeholder="    Item Title"
            value={title}
          />

          <TextInput
            style={styles.formField}
            placeholderTextColor="#053B62"
            onChangeText={(value) => setDescription(value)}
            type="text"
            placeholder="    Description (+5 Chars)"
            value={description}
          />

          <TextInput
            style={styles.formField}
            placeholderTextColor="#053B62"
            onChangeText={(value) => setPrice(value)}
            placeholder="    Item Price"
            value={price}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.formField}
            placeholderTextColor="#053B62"
            onChangeText={(value) => setQuantity(value)}
            placeholder="    Quantity"
            value={quantity}
            keyboardType="numeric"
          />

          <Pressable
            style={[styles.button, { marginTop: 13 }]}
            onPress={pickImageAsync}
          >
            <Text style={styles.buttonText}>Add Image</Text>
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
    </View>
  );
}
