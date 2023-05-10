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
import { auth } from "../../firebase";
import ItemContext from "../../context/ItemContext";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

const ProfilePage = ({ navigation }) => {
  const { user } = UserAuth();

  {
    user
      ? navigation.navigate("Profile Screen")
      : navigation.navigate("Sign In");
  }

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
      style={[{ backgroundColor: "#CBE7FC", flex: 1 }, styles.flex1Center]}
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
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;
