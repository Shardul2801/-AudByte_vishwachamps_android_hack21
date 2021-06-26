/** @format */

import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import PodcastCircleComponent from "../components/PodcastCircleComponent";
import { WindowHeight, WindowWidth } from "../Dimensions";

const AccountScreen = ({ posts, followers, following, username,postimage }) => {
  return (
    <View style={styles.container}>
      <View>
        <PodcastCircleComponent image='https://randomuser.me/api/portraits/men/86.jpg' />
        <Text style={styles.userName}> Username</Text>
      </View>
      <View style={styles.followersContainer}>
        <View style={styles.singleContainer}>
          <Text style={styles.accountParamHeading}>Posts</Text>
          <Text style={styles.accountParamNumber}> 100 </Text>
        </View>
        <View style={styles.singleContainer}>
          <Text style={styles.accountParamHeading}>Following</Text>
          <Text style={styles.accountParamNumber}> 200 </Text>
        </View>
        <View style={styles.singleContainer}>
          <Text style={styles.accountParamHeading}>Followers</Text>
          <Text style={styles.accountParamNumber}> 300 </Text>
        </View>
        <View style={styles.singleContainer}></View>
      </View>
      <View style = {styles.postContainer}>
        <View style = {styles.posts}>
            <Image style = {styles.postImage} source = {{uri : postimage || "https://image.flaticon.com/icons/png/512/985/985955.png" }} />
            <Image style = {styles.postImage} source = {{uri : postimage || "https://image.flaticon.com/icons/png/512/985/985955.png" }} />
            <Image style = {styles.postImage} source = {{uri : postimage || "https://image.flaticon.com/icons/png/512/985/985955.png" }} />
        </View>
        <View style = {styles.posts}>
            <Image style = {styles.postImage} source = {{uri : postimage || "https://image.flaticon.com/icons/png/512/985/985955.png" }} />
            <Image style = {styles.postImage} source = {{uri : postimage || "https://image.flaticon.com/icons/png/512/985/985955.png" }} />
            <Image style = {styles.postImage} source = {{uri : postimage || "https://image.flaticon.com/icons/png/512/985/985955.png" }} />
        </View>
        <View style = {styles.posts}>
            <Image style = {styles.postImage} source = {{uri : postimage || "https://image.flaticon.com/icons/png/512/985/985955.png" }} />
            <Image style = {styles.postImage} source = {{uri : postimage || "https://image.flaticon.com/icons/png/512/985/985955.png" }} />
            <Image style = {styles.postImage} source = {{uri : postimage || "https://image.flaticon.com/icons/png/512/985/985955.png" }} />
        </View>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    backgroundColor: "black",
  },
  followersContainer: {
    flexDirection: "row",
  },
  singleContainer: {},
  accountParamHeading: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: WindowWidth * 0.09,
    color: "white",
  },
  accountParamNumber: {
    fontSize: 16,
    fontWeight: "300",
    marginHorizontal: WindowWidth * 0.1,
    color: "white",
  },
  userName: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: WindowWidth * 0.399,
    paddingBottom: 50,
  },
  postContainer : {
    marginTop : WindowHeight*0.03,

  },
  posts : {
      flexDirection : "row",

  },
  postImage : {
      width : WindowWidth*0.3,
      height : WindowWidth*0.3,
      marginHorizontal : WindowWidth*0.01,
      marginTop : WindowHeight*0.01,
      borderWidth : 0.1,
      borderColor : "white",
      
  }
});
