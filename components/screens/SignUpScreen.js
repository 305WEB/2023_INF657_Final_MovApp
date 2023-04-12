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

  const onRegister = async (e) => {
    console.warn("Use Signed up");
    e.preventDefault();
    const data = { username, email, password, confirmpassword };
    console.log(data);
    try {
      await createUser(email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("TaskList");
      });
    } catch (err) {
      console.log(err);
    }
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

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
