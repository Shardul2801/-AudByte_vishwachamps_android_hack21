/** @format */

import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import BookReadingComponent from "../components/BookReadingComponent";
import HappeningNowComponent from "../components/HappeningNowComponent";
import PodcastCircleComponent from "../components/PodcastCircleComponent";
import { WindowHeight, WindowWidth } from "../Dimensions";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.mainView}>
        <Text style = {styles.ComponentTitle}>Happening Now</Text>
        <View style={styles.happeningNow}>
          <HappeningNowComponent
            image='https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            title='This is Topic'
            userName='Audbyte Admin'
          />
        </View>
        <Text style = {styles.PodcastTitle}>Podcasts</Text>
        <View style={styles.podcasts}>
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/men/62.jpg'
            title='Atharva Panegai'
          />
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/men/62.jpg'
            title='Atharva Panegai'
          />
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/men/62.jpg'
            title='Atharva Panegai'
          />
        </View>
        <View style={styles.podcasts}>
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/men/62.jpg'
            title='Atharva Panegai'
          />
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/men/62.jpg'
            title='Atharva Panegai'
          />
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/men/62.jpg'
            title='Atharva Panegai'
          />
        </View>
        <View style={styles.podcasts}>
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/men/62.jpg'
            title='Atharva Panegai'
          />
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/men/62.jpg'
            title='Atharva Panegai'
          />
          <PodcastCircleComponent
            image='https://randomuser.me/api/portraits/men/62.jpg'
            title='Atharva Panegai'
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
