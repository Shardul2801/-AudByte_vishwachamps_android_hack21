/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome5,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import AddScreen from "../screens/AddScreen";
import NotificationScreen from "../screens/NotificationScreen";
import AccountScreen from "../screens/AccountScreen";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        
      }}>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Entypo name='home' size={30} color='black' />,
          title: "Home",
        }}
      />
      <BottomTab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <AntDesign name='search1' size={24} color='black' />
          ),
          title: "Search",
        }}
      />
      <BottomTab.Screen
        name='Add'
        component={AddScreen}
        options={{
          tabBarIcon: () => <AntDesign name='plus' size={24} color='black' />,
          title: "Add",
        }}
      />
      <BottomTab.Screen
        name='Notification'
        component={NotificationScreen}
        options={{
          tabBarIcon: () => <Entypo name='bell' size={24} color='black' />,
          title: "Notification",
        }}
      />
      <BottomTab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name='account' size={24} color='black' />
          ),
          title: "Account",
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
