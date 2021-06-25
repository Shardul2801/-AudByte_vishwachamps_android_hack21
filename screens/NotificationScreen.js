/** @format */

import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const NotificationScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: "https://randomuser.me/api/portraits/men/86.jpg" }}
        />
        <Text style={styles.text}>Harrypotter just followed you</Text>
      </View>

      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: "https://randomuser.me/api/portraits/men/86.jpg" }}
        />
        <Text style={styles.text}>
          Harrypotter just followed you
        </Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: "https://randomuser.me/api/portraits/men/86.jpg" }}
        />
        <Text style={styles.text}>
            Harrypotter just followed you
        </Text>
      </View>
      <View style={styles.container}>
      <Image
          style={styles.image}
          source={{ uri: "https://randomuser.me/api/portraits/men/86.jpg" }}
        />
        <Text style={styles.text}>
            Harrypotter just followed you
        </Text>
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {

    flexDirection: "row",
    paddingVertical: 15,
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopColor: "gray",

  },
  main: {
    paddingTop: 50,
    backgroundColor : "black",
    flex : 1,
  },
  image:{
     height: 70, width: 70, borderRadius: 50 
  },
  text:{
      paddingHorizontal:20,
      color:"white"
  }
});
