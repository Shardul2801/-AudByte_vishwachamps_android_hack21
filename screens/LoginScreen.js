/** @format */

import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, Text, View,TouchableOpacity,TouchableWithoutFeedback,Image } from "react-native";
import {Input } from "react-native-elements";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const signIn = () => {
  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .catch((error) => alert(error));

  // };

  return (
      <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    <KeyboardAvoidingView behavior='padding' style={styles.container} >
      <Image
        source={{
          uri: "https://prescribedhealth.in/wp-content/uploads/2021/06/Add-a-subheading-2.png",
        }}
        style={{
          width: 400,
          height: 380,
          padding: 10,
          marginBottom: 10,
          flexDirection: "row",
        }}
      />
      <View style={styles.inputContainer}>
        <Input
          style = {{color : "white"}}
          placeholder='Email'
          placeholderTextColor = "white"
          autoFocus
          type='email'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
        style = {{color : "white"}}
          placeholder='Password'
          placeholderTextColor = "white"
          secureTextEntry
          type='password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          //  onSubmitEditing={signIn}
        />
      </View>
        <View  style = {styles.buttons}>
        <TouchableOpacity >
            <Text style = {styles.buttonTextLogin}>
            Login
            </Text>
        </TouchableOpacity>
        <TouchableOpacity >
            <Text style = {styles.buttonTextRegister}>
            Register
            </Text>
        </TouchableOpacity>
        </View>

      <View style={{ height: 0 }} />
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "black",
  },
  inputContainer: {
    width: 300,
    marginTop: 15,
  },
  button: {
    width: "100%",
    marginTop: 15,
    backgroundColor: "#120E43",
    textDecorationColor: "white",
    borderColor: "white",
    borderRadius: 50,
  },
  buttons : {
    flexDirection : "row",
    justifyContent : "space-between",
    paddingTop : 50,

  },
  buttonTextLogin : {
      color : "white",
      marginHorizontal: 40,
      paddingHorizontal : 50,
      borderWidth : 1,
      borderRadius : 10,
      borderColor : "white",
      paddingVertical : 17,

  },
  buttonTextRegister : {
      color : "black",
      marginHorizontal: 40,
      backgroundColor : "white",
      borderRadius: 10,
      paddingHorizontal: 50,
      paddingVertical:17,
     
    
  }

});
