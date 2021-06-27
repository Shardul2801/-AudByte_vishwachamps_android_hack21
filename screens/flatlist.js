/** @format */

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { WindowHeight, WindowWidth } from "../Dimensions";


const Listitem = ({ item }) => {
  return (
    <View style={styles.item}>
      <ImageBackground
        source={{ uri: item.uri }}
        style={styles.itemPhoto}
        resizeMode='cover'>
        <Text style={styles.itemText}>{item.text}</Text>
      
      </ImageBackground>
    </View>
  );
};

const FlatlistComponent = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <FlatList
                data={section.data}
                horizontal
                renderItem={({ item }) => {
                  return <Listitem item={item} />;
                }}
              />
            </>
          )}
          renderItem={({ item }) => {
            return null;
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
      <Text></Text>
    </View>
  );
};



const SECTIONS = [
  {
    title: "Happening Now",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Topic One",
        uri: "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        
      },
      {
        key: "2",
        text: "Topic Two",
        uri: "https://images.pexels.com/photos/7538137/pexels-photo-7538137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        
      },
      {
        key: "3",
        text: "Topic Three",
        uri: "https://images.pexels.com/photos/5460885/pexels-photo-5460885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        
      },
    ],
  },
];

export default FlatlistComponent ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  item: {
    margin: 10,
  },

  itemPhoto: {
    width: WindowWidth * 0.8,
    height: WindowHeight * 0.4,
  },
  itemText: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    paddingLeft: WindowWidth * 0.26,
    paddingTop: WindowHeight * 0.17,
  },
});
