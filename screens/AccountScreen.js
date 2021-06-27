/** @format */

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import PodcastCircleComponent from "../components/PodcastCircleComponent";
import { WindowHeight, WindowWidth } from "../Dimensions";
import { db } from "../firebase";
import * as DocumentPicker from "expo-document-picker";
import { Entypo } from "@expo/vector-icons";

const AccountScreen = ({
  posts,
  followers,
  following,
  username,
  postimage,
}) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setUser(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result.uri);
    console.log(result);
  };

  return (
    <View style={styles.container}>
      {user.map((info) => (
        <View>
          <PodcastCircleComponent  image='https://prescribedhealth.in/wp-content/uploads/2021/06/Add-a-subheading-2.png' />

          <Text style={styles.userName}>{info.name} </Text>
        </View>
      ))}

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
      <View style={styles.postContainer}>
        <View style={styles.posts}>
          <Image
            style={styles.postImage}
            source={{
              uri:
                postimage ||
                "https://image.flaticon.com/icons/png/512/985/985955.png",
            }}
          />
          <Image
            style={styles.postImage}
            source={{
              uri:
                postimage ||
                "https://image.flaticon.com/icons/png/512/985/985955.png",
            }}
          />
          <Image
            style={styles.postImage}
            source={{
              uri:
                postimage ||
                "https://image.flaticon.com/icons/png/512/985/985955.png",
            }}
          />
        </View>
        <View style={styles.posts}>
          <Image
            style={styles.postImage}
            source={{
              uri:
                postimage ||
                "https://image.flaticon.com/icons/png/512/985/985955.png",
            }}
          />
          <Image
            style={styles.postImage}
            source={{
              uri:
                postimage ||
                "https://image.flaticon.com/icons/png/512/985/985955.png",
            }}
          />
          <Image
            style={styles.postImage}
            source={{
              uri:
                postimage ||
                "https://image.flaticon.com/icons/png/512/985/985955.png",
            }}
          />
        </View>
        <View style={styles.posts}>
          <Image
            style={styles.postImage}
            source={{
              uri:
                postimage ||
                "https://image.flaticon.com/icons/png/512/985/985955.png",
            }}
          />
          <Image
            style={styles.postImage}
            source={{
              uri:
                postimage ||
                "https://image.flaticon.com/icons/png/512/985/985955.png",
            }}
          />
          <Image
            style={styles.postImage}
            source={{
              uri:
                postimage ||
                "https://image.flaticon.com/icons/png/512/985/985955.png",
            }}
          />
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
    marginLeft: WindowWidth * 0.43,
    paddingBottom: 50,
  },
  postContainer: {
    marginTop: WindowHeight * 0.03,
  },
  posts: {
    flexDirection: "row",
  },
  postImage: {
    width: WindowWidth * 0.3,
    height: WindowWidth * 0.3,
    marginHorizontal: WindowWidth * 0.01,
    marginTop: WindowHeight * 0.01,
    borderWidth: 0.1,
    borderColor: "white",
  },
  uploadButton: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "black",
    paddingHorizontal: 70,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "white",
  },
});
