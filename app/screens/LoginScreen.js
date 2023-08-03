import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/velocity.jpg")} style={styles.logo} />
        <Text>Welcome to Resume Builder! </Text>
      </View>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
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
