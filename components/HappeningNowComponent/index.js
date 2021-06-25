/** @format */

import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { WindowWidth, WindowHeight } from "../../Dimensions";

const HappeningNowComponent = ({ image, title, userName }) => {
  return (
    <View>
      <ImageBackground style={styles.imageTopic} source={{ uri: image }}>
        <Text style={styles.topicTitle}>{title}</Text>
        <Text style={styles.topicAdmin}>{userName}</Text>
      </ImageBackground>
    </View>
  );
};

export default HappeningNowComponent;

const styles = StyleSheet.create({
  topicTitle: {
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    paddingLeft : WindowWidth*0.26,
    paddingTop : WindowHeight*0.17
  },
  imageTopic: {
    height: WindowHeight * 0.4,
    width: WindowWidth * 0.9,
  },
  topicAdmin : {
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    paddingTop : WindowHeight*0.14,
    paddingLeft : WindowWidth*0.03

  }
});
