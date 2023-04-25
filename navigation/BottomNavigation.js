import react from "react";
import { View, Text } from "react-native";
import styles from "../components/Styles";
import ShoppingList from "../components/_ShoppingList";
import ProfilePage from "../components/screens/ProfilePage";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddItem from "../components/AddItem";
import SignInScreen from "../components/screens/SignInScreen";
import SignUpScreen from "../components/screens/SignUpScreen";
import ShoppingCart from "../components/screens/ShoppingCart";
import ItemList from "../components/ItemList";
{
  /* <MaterialCommunityIcons name="material-design" size={24} color="black" /> */
}

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#f1fc77" },
        tabBarActiveTintColor: "#0693e3"
        // tabBarActiveTintColor: "#A8B053"
      }}
    >
      <Tab.Screen
        name="Home"
        component={ItemList}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" color={"black"} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Sign In"
        component={SignInScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" color={"black"} size={size} />
          )
        }}
      />
      {/* <Tab.Screen
        name="Add Item"
        component={AddItem}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" color={"black"} size={size} />
          )
        }}
      /> */}
      <Tab.Screen
        name="Cart"
        component={ShoppingCart}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="cart" color={"black"} size={size} />
          )
        }}
      />
      {/* <Tab.Screen name="Profile" component={ProfilePage} /> */}
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={"black"}
              size={size}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}
