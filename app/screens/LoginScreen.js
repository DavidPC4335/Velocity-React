import { StackActions } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

function LoginScreen({ navigation, route }) {
  let loginType = route.params.type;
  let msg = loginType === "login" ? "Welcome Back!" : "Welcome new user!";

  const [username, setUsername] = useState("empty");
  const [password, setPassword] = useState("empty");

  return (
    <View style={styles.background}>
      <Text padding={50} style={styles.titleText}>
        {msg} {"\n"} username : {username + "\n"} Password : {password}
      </Text>
      <Text style={styles.subtitleText}>Username:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Userame:"
        onChangeText={(txt) => setUsername(txt)}
      />
      <Text style={styles.subtitleText}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password:"
        secureTextEntry={true}
        onChangeText={(txt) => setPassword(txt)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "PersonalInfo" }],
          });
        }}
      >
        <Text>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#baa975",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
    width: 250,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitleText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "gray",
    alignItems: "center",
    padding: 10,
    width: 100,
  },
});
export default LoginScreen;
