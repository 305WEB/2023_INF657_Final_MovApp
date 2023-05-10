// import {
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   useWindowDimensions,
//   Keyboard,
//   TouchableWithoutFeedback
// } from "react-native";
// import React, { useState } from "react";
// import ImageIcon from "../../assets/shopping_cart_checkout.png";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";
// import styles from "../Styles";
// import { UserAuth } from "../../context/AuthContext";
// import { useNavigation } from "@react-navigation/native";

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
    // <View style={styles.container}>
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Email"
    //     value={email}
    //     onChangeText={setEmail}
    //   />
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Password"
    //     value={password}
    //     onChangeText={setPassword}
    //     secureTextEntry
    //   />
    //   <TouchableOpacity style={styles.button} onPress={handleSignIn}>
    //     <Text style={styles.buttonText}>Sign In</Text>
    //   </TouchableOpacity>
    // </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20
//   },
//   input: {
//     height: 50,
//     width: "100%",
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     paddingHorizontal: 10,
//     marginBottom: 10
//   },
//   button: {
//     height: 50,
//     width: "100%",
//     backgroundColor: "#007bff",
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18
//   }
// });

export default SignInScreen;

// export default function SignInScreen() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   const { height } = useWindowDimensions();
//   const { signIn, logOut } = UserAuth();
//   const navigation = useNavigation();

//   // SIGN IN

//   const onSingIn = async (e) => {
//     // console.warn("Sign In Pressed");

//     e.preventDefault();
//     try {
//       await signIn(email, password);
//       // console.log("user signedIn");
//       navigation.navigate("Home");
//     } catch (err) {
//       alert(
//         "Please enter valid user email and password or create a new account. Thank you."
//       );
//       console.log(err);
//     }
//   };

// // FORGOT PASS

// const OnForgotPassword = () => {
//   // console.warn("Forgot Password Pressed");
//   navigation.navigate("Forgot Pass");
// };

// // LOG OUT

// const OnLogOut = async () => {
//   try {
//     await logOut();
//     alert("You are logged out");
//     navigation.navigate("Sing In");
//   } catch (err) {
//     console.log(err);
//   }
// };

// const OnSingUp = () => {
//   // console.warn("Sign Up is pressed");

//   navigation.navigate("Sign Up");
// };

//   return (
// <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
{
  /* <View style={[{ backgroundColor: "#CBE7FC", flex: 1 }, styles.flex1Center]}>
  <Image
    source={ImageIcon}
    style={(styles.signImage, { height: height * 0.2 })}
    resizeMode="contain"
  />
  <View style={{ height: 60 }}></View>
  <CustomInput placeholder="User Email" value={email} setValue={setEmail} />
  <CustomInput
    placeholder="Password"
    value={password}
    setValue={setPassword}
    secureTextEntry={true}
  />
  <CustomButton text="Sign In" onPress={onSingIn} />
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
</View>; */
}
// </TouchableWithoutFeedback>
//   );
// }
