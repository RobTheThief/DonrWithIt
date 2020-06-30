import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Cards from "./app/components/Cards";

export default function app() {
  console.log("App Running!!");
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Cards
        title="Red Jacket for Sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>

    //<ViewImageScreen />; <AppText>I love React!!</AppText> <MaterialCommunityIcons name="email" size={200} color="tomato" /> <WelcomeScreen />
  );
}
//thin
