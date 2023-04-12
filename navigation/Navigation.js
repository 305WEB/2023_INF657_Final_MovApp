import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import SignInScreen from "../components/screens/SignInScreen";
import SignUpScreen from "../components/screens/SignUpScreen";
import ForgotPassword from "../components/screens/ForgotPassword";
import ShoppingList from "../components/ShoppingList";

const Stack = createNativeStackNavigator();

export default function Navigation() {

return ( <>
  <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Sing In" component={SignInScreen} />
        <Stack.Screen name="Sing Up" component={SignUpScreen} />
        <Stack.Screen name="Forgot Pass" component={ForgotPassword} />
        <Stack.Screen name="Home" component={ShoppingList} />
      </Stack.Navigator>
  </NavigationContainer>
  </>
)

}