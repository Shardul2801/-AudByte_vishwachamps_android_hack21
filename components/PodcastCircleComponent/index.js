import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const PodcastCircleComponent = ({image,title}) => {
    return (
        <View style = {styles.container}>
            <Image 
             style={{height : 110,width : 110, borderRadius: 100, marginHorizontal:8}}
             source = {{uri : image}} />
             <Text style = {styles.title}>{title}</Text>
             
        </View>
    )
}

export default PodcastCircleComponent

const styles = StyleSheet.create({
    container:{
        justifyContent : "center",
        alignItems : "center"
        
    },
    title : {
        color : "white",
        fontSize : 14,
    }
})
