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
  Pressable,
  Linking
} from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import styles from "./Styles";
import React, { useRef } from "react";
import * as ImagePicker from "expo-image-picker";
import ItemContext from "../context/ItemContext";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "./shared/CustomButton";
import MovieDetail from "./screens/MovieDetail";

const Item = ({
  id,
  image,
  title,
  description,
  release_date,
  vote_average
}) => {
  const { deleteItem, addItemToFaveList } = useContext(ItemContext);

  const navigation = useNavigation();

  // CLOSE SWIPEABLE

  const swipeableRef = useRef(null);

  // const handleCloseSwipe = () => {
  //   swipeableRef.current.close();
  // };

  const navigateToMovieDetail = (
    // image,
    // title,
    // description,
    // release_date,
    // vote_average
    MovieDetailsInfo
  ) => {
    navigation.navigate("Movie Details", {
      MovieDetailsInfo
      // image: image,
      // title: title,
      // description: description,
      // release_date: release_date,
      // vote_average: vote_average
    });
  };

  // ADD TO LIST

  const handleAddToFaveList = () => {
    const newItem = {
      id: id,
      title: title,
      description: description,
      image: image,
      release_date: release_date,
      vote_average: vote_average
    };

    addItemToFaveList(newItem);
    alert("Movie Added!");
  };

  const movie_url = "https://www.themoviedb.org/movie/";

  return (
    <>
      <View style={{ height: 50 }}></View>

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
              {/* {title} */}
            </Text>

            <View>
              <FontAwesome
                name="plus"
                size={15}
                color="#000"
                onPress={handleAddToFaveList}
                style={{
                  // display: addItemAreaBtn,
                  alignSelf: "center",
                  // zIndex: 5,
                  // marginTop: 26,
                  top: 12
                  // right: 17,
                  // width: 50,
                  // height: 50
                }}
              />
              <MaterialCommunityIcons
                name="heart"
                size={34}
                color="red"
                style={styles.iconHeart}
                onPress={handleAddToFaveList}
              ></MaterialCommunityIcons>
              {/* </Text> */}
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
          <View style={styles.containerColumn3}>
            <Text style={[styles.descBoldText]}>Movie: {title}</Text>
            <Text style={styles.titleBoldText} onPress={navigateToMovieDetail}>
              {/* <Text
                style={{ color: "blue" }}
                onPress={() => Linking.openURL(`${movie_url}${id}`)}
              >
                {" "}
                [Movie Page]
              </Text> */}
              Movie Details
            </Text>
          </View>
        </>
      </TouchableHighlight>
    </>
  );
};

export default Item;
