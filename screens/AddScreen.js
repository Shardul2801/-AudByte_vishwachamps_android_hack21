/** @format */

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

const AddScreen = () => {
  pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result.uri);
    console.log(result);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.uploadButton} onPress={pickDocument}>
        <Entypo name='mic' size={24} color='white' />
        <Text style={styles.buttonText}>Upload Content</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  buttonText: {
    marginLeft: 10,
    color: "white",
    fontSize: 20,
  },
  uploadButton: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "black",
    paddingHorizontal: 70,
    paddingVertical: 30,
    borderWidth: 1,
    borderColor: "white",
  },
});
