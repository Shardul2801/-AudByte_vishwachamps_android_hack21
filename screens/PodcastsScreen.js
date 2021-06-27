/** @format */

import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { ScrollView, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";

const PodcastsScreen = ({ navigation }) => {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/18.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <Ionicons name='chevron-back' size={35} color='white' />
      </TouchableOpacity>

      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
        />
        <Text style={styles.text2}>The Ranveer Show</Text>
        <Text style={styles.text3}>BY RANVEER ALLAHBADIA</Text>
      </View>

      <View style={styles.sort}>
        <Text style={styles.sorttext}>All episodes </Text>
      </View>

      <ScrollView>
        <TouchableOpacity onPress={playSound}>
          <View style={styles.container2}>
            <Image
              style={styles.image2}
              source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
            />
            <View>
              <Text style={styles.text}>The Ranveer Show</Text>
              <Text style={styles.text3}>BY RANVEER ALLAHBADIA</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.container2}>
          <Image
            style={styles.image2}
            source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
          />
          <View>
            <Text style={styles.text}>The Ranveer Show</Text>
            <Text style={styles.text3}>BY RANVEER ALLAHBADIA</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <Image
            style={styles.image2}
            source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
          />
          <View>
            <Text style={styles.text}>The Ranveer Show</Text>
            <Text style={styles.text3}>BY RANVEER ALLAHBADIA</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <Image
            style={styles.image2}
            source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
          />
          <View>
            <Text style={styles.text}>The Ranveer Show</Text>
            <Text style={styles.text3}>BY RANVEER ALLAHBADIA</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <Image
            style={styles.image2}
            source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
          />
          <View>
            <Text style={styles.text}>The Ranveer Show</Text>
            <Text style={styles.text3}>BY RANVEER ALLAHBADIA</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <Image
            style={styles.image2}
            source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
          />
          <View>
            <Text style={styles.text}>The Ranveer Show</Text>
            <Text style={styles.text3}>BY RANVEER ALLAHBADIA</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <Image
            style={styles.image2}
            source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
          />
          <View>
            <Text style={styles.text}>The Ranveer Show</Text>
            <Text style={styles.text3}>BY RANVEER ALLAHBADIA</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <Image
            style={styles.image2}
            source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
          />
          <View>
            <Text style={styles.text}>The Ranveer Show</Text>
            <Text style={styles.text3}>BY RANVEER ALLAHBADIA</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default PodcastsScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: 30,
  },
  container: {
    alignItems: "center",
  },
  image: {
    marginTop: 65,
    borderRadius: 5,
    height: 200,
    width: 220,
  },
  image2: {
    flexDirection: "row",
    borderRadius: 5,

    height: 80,
    width: 80,
    marginLeft: 10,
    marginVertical: 15,
  },

  text: {
    color: "white",
    paddingTop: 20,
    fontSize: 25,
    marginLeft: 10,
  },
  text2: {
    color: "white",
    paddingTop: 20,
    fontSize: 25,
  },
  text3: {
    color: "#758283",
    paddingTop: 7,
    fontSize: 15,
    marginLeft: 15,
  },
  sort: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginLeft: 15,
  },
  sorttext: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 15,
  },
  container2: {
    flexDirection: "row",
    borderColor: "#CAD5E2",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  hometext: {
    color: "white",
  },
});
