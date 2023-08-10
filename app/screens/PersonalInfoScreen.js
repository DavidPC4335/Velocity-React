import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";

function PersonalInfoScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text>Test</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: "#D3D3D3",
    justifyContent: "space-evenly",
  },
  scroll: {
    flex: 1,
    paddingLeft: 30,
    backgroundColor: "#FFFFFF",
    alignItems: "baseline",
    justifyContent: "space-evenly",
  },
});
export default PersonalInfoScreen;
