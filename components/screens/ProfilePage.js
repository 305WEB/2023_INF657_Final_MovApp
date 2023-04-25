import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  SafeAreaView
} from "react-native";
import React, { useState, useContext } from "react";
import ProfileIcon from "../../assets/PorfileImage.png";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";
import styles from "../Styles";
import { UserAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import ShoppingList from "../_ShoppingList";
import { auth } from "../../firebase";
import ItemContext from "../../context/ItemContext";

export default function ProfilePage() {
  const navigation = useNavigation();
  // if (auth.currentUser == null || auth.currentUser.email == null) {
  //   navigation.navigate("Sign In");
  //   return;
  // }
  //
  const [email, setEmail] = useState(auth.currentUser.email);

  const [username, setUsername] = useState("");

  const { height } = useWindowDimensions();
  const { updateUser } = UserAuth();

  const onEdit = async (e) => {
    e.preventDefault();
    const data = { username, email };
    console.log(data);
    try {
      await updateUser(username, email);
      navigation.navigate("Home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView
      style={[{ backgroundColor: "#f1fc77", flex: 1 }, styles.flex1Center]}
    >
      <View>
        <Image
          source={ProfileIcon}
          style={(styles.signImage, { height: height * 0.2 })}
          resizeMode="contain"
        />

        <View style={styles.flex1Center}>
          <View style={{ height: 60 }}></View>
          <CustomInput
            placeholder="User Email"
            value={email}
            setValue={setEmail}
          />
          <CustomInput
            placeholder="User Name"
            value={username}
            setValue={setUsername}
          />
        </View>
        <CustomButton text="Edit Profile" onPress={onEdit} />
        {/* <CustomButton
        bgColor="#f9e5b2"
        text="Forgot Password"
        onPress={OnForgotPassword}
      /> */}
      </View>
    </SafeAreaView>
  );
}
