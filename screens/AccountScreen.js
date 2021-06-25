import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PodcastCircleComponent from '../components/PodcastCircleComponent'


const AccountScreen = () => {
    return (
        <View>
           <PodcastCircleComponent image = "https://randomuser.me/api/portraits/men/86.jpg" />
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({})
