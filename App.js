import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
//import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screen imports
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";

//const Stack = createNativeStackNavigator();

export default function App() {
  return (
    /*
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Second" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    */
    <WelcomeScreen />
  );
}
