import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  Alert,
} from "react-native";

import { StatusBar } from "expo-status-bar";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Text style={{ fontSize: 20, padding: 10 }}>
          Welcome to Resume Builder!{" "}
        </Text>
        <Image source={require("../assets/velocity.jpg")} style={styles.logo} />
      </View>

      {/* Buttons */}
      <View style={styles.guestButton}>
        <Button
          title="Continue as Guest"
          //resets navigfation to personalInfo section
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "PersonalInfo" }],
            });
          }}
          //style={{}}
        />
      </View>
      <View style={styles.loginButton}>
        <Button
          title="Login"
          onPress={() => navigation.navigate("Login", { type: "login" })}
          //style={{}}
        />
      </View>
      <View style={styles.registerButton}>
        <Button
          title="Register"
          onPress={() => navigation.navigate("Login", { type: "register" })}
          //style={{}}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "yellow",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "tomato",
  },
  guestButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#D3D3D3",
  },
  logo: {
    width: 190,
    height: 100,
  },
  logoContainer: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },
});
export default WelcomeScreen;
