/** @format */

import React, { useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Text,Image} from "react-native-elements";
import { Button, Input } from "react-native-elements";
import { WindowHeight, WindowWidth } from "../Dimensions";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);

  //const register = () => {
  // auth
  //   .createUserWithEmailAndPassword(email,password)
  //   .then((authUser) => {
  //     authUser.user.updateProfile({
  //       displayName: name ,
  //       photoURL:
  //        imageUrl ||
  //        "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
  //     });
  //   })
  //   .catch((error) => alert(error.message));
  //};

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
   
      <Image
        source={{
          uri: "https://prescribedhealth.in/wp-content/uploads/2021/06/Add-a-subheading-2.png",
        }}
        style={{
          width: WindowWidth*0.9,
          height: WindowHeight*0.3,
          padding: 10,
          marginBottom: 10,
          flexDirection: "row",
        }}
      />
         <Text h3 style={{ marginBottom: 50, color: "white" }}>
        Create Account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholderTextColor='white'
          style={{ color: "white" }}
          placeholder='Full Name'
          type='text'
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholderTextColor='white'
          style={{ color: "white" }}
          placeholder='Email'
          type='email'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholderTextColor='white'
          placeholder='Password'
          style={{ color: "white" }}
          type='password'
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholderTextColor='white'
          placeholder='Confirm Password'
          style={{ color: "white" }}
          type='password'
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        
      </View>
      <Button
        containerStyle={styles.button}
        type='outline'
        raised
        // onPress={register}
        title='Register'
      />
    </KeyboardAvoidingView>
  );
};
export default RegisterScreen;

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
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
