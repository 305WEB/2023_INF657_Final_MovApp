import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from "react-native";
import React, { useState } from "react";
import ImageIcon from "../../assets/snack-icon.png";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";
import styles from "../Styles";
import { UserAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  // USER AUTH
  const { user, createUser } = UserAuth();

  // REGISTER USER

  const onRegister = async (e) => {
    console.warn("User Signed up");
    e.preventDefault();
    const data = { username, email, password, confirmpassword };
    console.log(data);
    try {
      await createUser(email, password, username).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Sign In");
      });
    } catch (err) {
      console.log(err);
    }
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <View style={[{ backgroundColor: "#CBE7FC", flex: 1 }, styles.flex1Center]}>
      <Image
        source={ImageIcon}
        style={(styles.signImage, { height: height * 0.2 })}
        resizeMode="contain"
      />
      <View style={{ height: 60 }}></View>
      <Text style={styles.headingText}>Create Account</Text>
      <CustomInput
        placeholder="User Name"
        value={username}
        setValue={setUsername}
      />
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomInput
        placeholder="Confirm Password"
        value={confirmpassword}
        setValue={setConfirmPassword}
        secureTextEntry={true}
      />
      <CustomButton text="Sign Up" onPress={onRegister} />
    </View>
  );
}
