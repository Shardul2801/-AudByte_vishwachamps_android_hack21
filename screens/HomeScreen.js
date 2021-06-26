/** @format */

import React from "react";
import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from "react-native";
import BookReadingComponent from "../components/BookReadingComponent";
import HappeningNowComponent from "../components/HappeningNowComponent";
import PodcastCircleComponent from "../components/PodcastCircleComponent";
import { WindowHeight, WindowWidth } from "../Dimensions";
import FlatlistComponent from "./flatlist";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.mainView}>
        <Text style = {styles.ComponentTitle}>Happening Now</Text>
        <View style={styles.happeningNow}>
        <FlatlistComponent />
        </View>
        <Text style = {styles.PodcastTitle}>Podcasts</Text>
        <View style={styles.podcasts}>
          
          
        <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/men/44.jpg'
            title='User One'
          />
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/men/80.jpg'
            title='User Two'
          />
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/men/51.jpg'
            title='User Three'
          />
          
        </View>
        <View style={styles.podcasts}>
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/women/53.jpg'
            title='User four'
          />
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/women/12.jpg'
            title='User Five'
          />
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/women/87.jpg'
            title='User six'
          />
        </View>
        <View style={styles.podcasts}>
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/men/79.jpg'
            title='User Seven'
          />
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/men/74.jpg'
            title='User eight'
          />
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/men/29.jpg'
            title='User nine'
          />
        </View>
        <Text style = {styles.PodcastTitle}>Book Reading</Text>
        <View style={styles.bookReading}>
          
          <BookReadingComponent
            image='https://randomuser.me/api/portraits/men/90.jpg'
            title='Harry Potter'
          />

          <BookReadingComponent
            image='https://randomuser.me/api/portraits/men/90.jpg'
            title='Harry Potter'
          />
          
        </View>
        <View style={styles.bookReading}>
          <BookReadingComponent
            image='https://randomuser.me/api/portraits/men/90.jpg'
            title='Harry Potter'
          />

          <BookReadingComponent
            image='https://randomuser.me/api/portraits/men/90.jpg'
            title='Harry Potter'
          />
        </View>
        
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  podcasts: {
    flexDirection: "row",
    marginVertical: 20,
  },
  bookReading: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  happeningNow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  mainView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    flex: 1,
    paddingTop: 30,
  },
  ComponentTitle : {
      color : "white",
      justifyContent:  "flex-start",
      fontSize : 18,
      fontWeight : "bold",
      marginRight : WindowWidth*0.5,
      paddingBottom : WindowHeight*0.03,
      paddingTop : WindowHeight*0.02,
  },
  PodcastTitle : {
    color : "white",
    justifyContent:  "flex-start",
    fontSize : 18,
    fontWeight : "bold",
    marginRight : WindowWidth*0.62,
    paddingBottom : WindowHeight*0.01,
    paddingTop : WindowHeight*0.02,
  }
});
