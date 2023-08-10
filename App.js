import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screen imports
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import PersonalInfoScreen from "./app/screens/PersonalInfoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfoScreen}
          options={{
            title: "Personal Info",
            headerBackButtonMenuEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
