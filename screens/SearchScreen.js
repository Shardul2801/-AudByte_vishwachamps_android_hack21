/** @format */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements/dist/input/Input";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Input
         placeholderTextColor = "gray"
      
        placeholder=' Search for artists,podcasts & more '
        leftIcon={{ type: "font-awesome", name: "search",color : "white",size : 30 }}
        style = {{
            borderWidth : 0.2,
            borderColor : "white",
            paddingVertical : 17, 
            borderRadius:20,
            color : "white",
            paddingLeft : 20,
        }}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 50,
    flexDirection: "row",
  },
});
