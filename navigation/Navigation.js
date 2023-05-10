import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SignInScreen from "../components/screens/SignInScreen";
import SignUpScreen from "../components/screens/SignUpScreen";
import ForgotPassword from "../components/screens/ForgotPassword";
import { UserAuth } from "../context/AuthContext";
import ItemList from "../components/ItemList";
import ProfilePage from "../components/screens/ProfilePage";
import FavoritesList from "../components/screens/FavoritesList";
import Item from "../components/Item";
import MovieDetail from "../components/screens/MovieDetail";

const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Home" component={ItemList} />
      <Stack.Screen name="Explore" component={SignUpScreen} />
      {/* <Stack.Screen name="Forgot Pass" component={ForgotPassword} /> */}
      <Stack.Screen name="Movie Details" component={MovieDetail} />
      <Stack.Screen name="Profile Screen" component={ProfilePage} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
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
            <MaterialCommunityIcons name="login" color={"black"} size={size} />
          )
        }}
      />

      <Tab.Screen
        name="Faves"
        component={FavoritesList}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="heart" color={"black"} size={size} />
          )
        }}
      />

      <Tab.Screen
        name="Profile Screen"
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

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Sing In" component={SignInScreen} />
    <AuthStack.Screen name="Forgot Pass" component={ForgotPassword} />
    <AuthStack.Screen name="Sign Up" component={SignUpScreen} />
  </AuthStack.Navigator>
);

// define your drawer navigator
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#f4fffc",
          width: 240
        }
      }}
    >
      <Drawer.Screen name="Home Screen" component={TabNavigator} />
      <Drawer.Screen name="Movie List" component={ItemList} />
      <Drawer.Screen name="Favorite List" component={FavoritesList} />
      <Drawer.Screen name="Profile Screen" component={ProfilePage} />
      <Drawer.Screen
        name="Movie Details"
        component={MovieDetail}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null
        }}
      />
    </Drawer.Navigator>
  );
}

// wrap your navigators in the NavigationContainer
export default function Navigation() {
  const { user } = UserAuth();
  return (
    <NavigationContainer>
      {user ? <DrawerNavigator /> : <AuthStackScreen />}
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
}
