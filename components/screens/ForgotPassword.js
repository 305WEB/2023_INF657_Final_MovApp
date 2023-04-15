import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from "react-native";
import React, { useState } from "react";
import ImageIcon from "../../assets/shopping_cart_checkout.png";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";
import styles from "../Styles";
import { useNavigation } from "@react-navigation/native";

export default function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onConfirm = () => {
    console.warn("Sending Link");

    alert("Your Password has been reset.");
    navigation.navigate("Sing In");
  };

  const onHandleBackSingIn = () => {
    // console.warn("Sending user back to sing in screen");

    navigation.navigate("Sing In");
  };

  return (
    <View style={[{ backgroundColor: "#f1fc77", flex: 1 }, styles.flex1Center]}>
      <Image
        source={ImageIcon}
        style={(styles.signImage, { height: height * 0.2 })}
        resizeMode="contain"
      />
      <View style={{ height: 60 }}></View>
      <Text style={styles.headingText}>Reset Password</Text>
      <CustomInput
        placeholder="User Name"
        value={username}
        setValue={setUsername}
      />
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <View style={{ height: 60 }}></View>
      <CustomButton text="Submit" onPress={onConfirm} />
      <CustomButton text="< Back to Sign In" onPress={onHandleBackSingIn} />
    </View>
  );
}
