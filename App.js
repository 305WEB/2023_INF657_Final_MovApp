import ShoppingList from "./components/ShoppingList";
import SignInScreen from "./components/screens/SignInScreen";
import SignUpScreen from "./components/screens/SignUpScreen";
import ForgotPassword from "./components/screens/ForgotPassword";
import { AuthContextProvider } from "./context/AuthContext";
import Navigation from "./navigation/Navigation";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    // <ForgotPassword />
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>

    //<SignUpScreen />
    // <SignInScreen/>
    // {<ShoppingList />;}
  );
}
