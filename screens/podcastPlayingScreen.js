/** @format */

import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import { WindowHeight, WindowWidth } from "../Dimensions";
import { Entypo,AntDesign  } from '@expo/vector-icons';


const podcastPlayingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainIcon}>
        <Image style = {styles.image} source = {{uri : "https://image.freepik.com/free-vector/isolated-retro-vintage-microphone_1284-38772.jpg"}} />
      </View>
      <View style={styles.playPauseButtons}>
        <TouchableOpacity>
        <AntDesign style = {styles.icon} name="stepforward" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Entypo style = {styles.icon} name="controller-play" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign style = {styles.icon} name="stepforward" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style = {styles.titleContainer}>
        <Text style = {styles.titleText}>Using Firebase in React Native - Part 6 (Uploading/Displaying Images)</Text>

      </View>

    </View>
  );
};

export default podcastPlayingScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "black",
    paddingTop : 100,
  },
  image : {
      width : WindowWidth*0.5,
      height : WindowWidth*0.5,

},
playPauseButtons : {
    flexDirection : 'row',
    justifyContent : "space-around",
    paddingTop : 50,
},
icon : {
    paddingHorizontal : 30,
},
titleContainer : {
    paddingTop : 50,
    marginHorizontal : 20,
},
titleText : {
    color : "white",
    fontSize : 20,
    fontWeight : "normal",

}

});
