/** @format */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import LoginScreen from "../screens/LoginScreen";
import SplashScreen from "../screens/SplashScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='BottomTabNav'
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen name = "Login" component = {LoginScreen} options = {{headerShown : false}} />
      <Stack.Screen name = "Splash" component = {SplashScreen} options = {{headerShown : false}} />
      <Stack.Screen name = "Register" component = {RegisterScreen} options = {{headerShown : false}} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
