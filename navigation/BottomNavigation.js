import "react-native-gesture-handler";
import react from "react";
import { View, Text } from "react-native";
import styles from "../components/Styles";
import ProfilePage from "../components/screens/ProfilePage";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignInScreen from "../components/screens/SignInScreen";
import SignUpScreen from "../components/screens/SignUpScreen";
import FavoritesList from "../components/screens/FavoritesList";
import ItemList from "../components/ItemList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import MovieDetail from "../components/screens/MovieDetail";
import Navigation from "./Navigation";
{
  /* <MaterialCommunityIcons name="material-design" size={24} color="black" /> */
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#CBE7FC" },
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
        name="Movie Detail"
        component={MovieDetail}
        options={{
          tabBarButton: (props) => null, // Removes Item from bottom bar
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" color={"black"} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Navigation"
        component={Navigation}
        options={{
          tabBarButton: (props) => null, // Removes Item from bottom bar
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" color={"black"} size={size} />
          )
        }}
      /> */}
      <Tab.Screen
        name="Faves"
        component={FavoritesList}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="heart" color={"black"} size={size} />
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
