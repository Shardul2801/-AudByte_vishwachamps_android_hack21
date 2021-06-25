import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const BookReadingComponent = ({image,title}) => {
    return (
        <View style = {styles.container}>
        <Image 
         style={{height : 150,width : 150, borderRadius: 25, marginHorizontal:8}}
         source = {{uri : image}} />
         <Text style = {styles.title}>{title}</Text>
         
    </View>
    )
}

export default BookReadingComponent

const styles = StyleSheet.create({
    container:{
        justifyContent : "center",
        alignItems : "center",
        paddingHorizontal : 17,
        paddingVertical : 7,
        
    },
    title : {
        color : "white",
        fontSize : 14,
    }
})
