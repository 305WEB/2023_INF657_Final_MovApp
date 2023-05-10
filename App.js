import "react-native-gesture-handler";
import SignInScreen from "./components/screens/SignInScreen";
import SignUpScreen from "./components/screens/SignUpScreen";
import ForgotPassword from "./components/screens/ForgotPassword";
import { AuthContextProvider } from "./context/AuthContext";
import Navigation from "./navigation/Navigation";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./navigation/BottomNavigation";
import { ItemProvider } from "./context/ItemContext";

export default function App() {
  return (
    <AuthContextProvider>
      <ItemProvider>
        {/* <NavigationContainer>
          <MyTabs />
        </NavigationContainer> */}

        <Navigation />
      </ItemProvider>
    </AuthContextProvider>
  );
}
