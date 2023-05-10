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
import styles from "../Styles";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import BottomNavigation from "../../navigation/BottomNavigation";
import FaveItem from "../FaveItem";
import { NavigationContainer } from "@react-navigation/native";
import { navigation } from "../../navigation/Navigation";
// import { MovieDetailsInfo } from "../FaveItem";
// import * as ImagePicker from "expo-image-picker";
// import ItemContext from "../context/ItemContext";
// import CustomButton from "./shared/CustomButton";

const MovieDetail = ({ route }) => {
  const navigation = useNavigation();
  // const { image, title, description, release_date, vote_average } =
  //   route.params;

  const { MovieDetailsInfo } = route.params;

  // const { image, title, description, release_date, vote_average } =
  //   MovieDetailsInfo;

  const movie_url = "https://www.themoviedb.org/movie/";

  return (
    <>
      <View style={{ height: 18 }}></View>

      <TouchableHighlight
        underlayColor={"#lightgrey"}
        // onPress={() => console.log("Item Selected", itemList)}
      >
        <>
          <View style={styles.mainContainerColumn1}>
            <Image
              style={styles.image}
              source={{ uri: `${MovieDetailsInfo.image}` }}
              dataSet={{ media: styles.image }}
            />

            <Text
              style={[
                styles.spaceAround3,
                styles.inputText,
                styles.titleBoldText
              ]}
            >
              {MovieDetailsInfo.title}
            </Text>

            <View>
              {/* <Text style={[styles.inputTextRight, styles.itemPropBoldText]}>
                  Add to Fave List:
                </Text> */}
              {/* <Text style={[styles.itemProp, styles.inputTextRight]}>
                  <Text
                    style={styles.addToFaveBtn}
                    onPress={handleAddToFaveList}
                  >
                    Add to Cart
                  </Text> */}

              {/* </Text> */}
              <Text style={[styles.inputTextRight, styles.itemPropBoldText]}>
                Rated:
              </Text>
              <Text style={[styles.itemProp, styles.inputTextRight]}>
                {MovieDetailsInfo.vote_average}
              </Text>

              <Text style={[styles.inputTextRight, styles.itemPropBoldText]}>
                Release Date:
              </Text>
              <Text style={[styles.itemProp, styles.inputTextRight]}>
                {MovieDetailsInfo.release_date}
              </Text>
            </View>
          </View>
          <View style={styles.containerColumn3}>
            <Text style={[styles.descBoldText, styles.descBack]}>
              Overview:
            </Text>
            <Text style={styles.description}>
              {MovieDetailsInfo.description}
            </Text>
          </View>
        </>
      </TouchableHighlight>
    </>
  );
};

export default MovieDetail;
