/** @format */

import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { WindowHeight } from "../Dimensions";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://prescribedhealth.in/wp-content/uploads/2021/06/audByteLogo.png",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.message}>
          Your Profile is under Review.. We will get back to you.Be sure you’ve
          filled authentic and interesting information about your self
        </Text>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "black",
    paddingTop : 50,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius : 50,
    marginRight : 10,
  },
  imageContainer: {
    paddingTop: 20,
    paddingLeft: 7,
    height: WindowHeight * 0.2,
    
  },
  textContainer: {
    marginTop: 20,
    paddingTop: 20,
    paddingLeft: 5,
    backgroundColor: "gray",
    height: WindowHeight * 0.11,
    marginRight: 100,
    borderRadius: 20,
  },
  message: {
    color: "white",
  },
});
