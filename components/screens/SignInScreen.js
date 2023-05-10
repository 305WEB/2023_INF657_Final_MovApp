import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";
import React, { useState } from "react";
import styles from "../Styles";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { UserAuth } from "../../context/AuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, logOut } = UserAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      console.log("user signedIn");
      navigation.navigate("Home");
    } catch (err) {
      console.log(err);
    }
  };

  // FORGOT PASS

  const OnForgotPassword = () => {
    // console.warn("Forgot Password Pressed");
    navigation.navigate("Forgot Pass");
  };

  // LOG OUT

  const OnLogOut = async () => {
    try {
      await logOut();
      alert("You are logged out");
      navigation.navigate("Sing In");
    } catch (err) {
      console.log(err);
    }
  };

  const OnSingUp = () => {
    // console.warn("Sign Up is pressed");

    navigation.navigate("Sign Up");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={[{ backgroundColor: "#CBE7FC", flex: 1 }, styles.flex1Center]}
      >
        {/* <Image
        source={ImageIcon}
        style={(styles.signImage, { height: height * 0.2 })}
        resizeMode="contain"
      /> */}
        <MaterialCommunityIcons name="login" color={"black"} size={50} />
        <View style={{ height: 60 }}></View>
        <CustomInput
          placeholder="User Email"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sign In" onPress={handleSignIn} />
        <CustomButton
          bgColor="#f9e5b2"
          text="Forgot Password"
          onPress={OnForgotPassword}
        />

        <CustomButton bgColor="#d1ebf8" text="Log Out" onPress={OnLogOut} />

        <CustomButton
          bgColor="white"
          text="Don't Have an Account? Create One!"
          onPress={OnSingUp}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
