import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { db, auth } from "../firebase";



const KadyaScreen = () => {

    const [user, setUser] = useState([]);
    useEffect(() => {
        db.collection("users").onSnapshot(snapshot =>{
            setUser(snapshot.docs.map(doc => doc.data()))
        })
    },[])
    

    return (
        <View style = {styles.container}>
       <Text> I Am Kadya Screen</Text>
       {
           user.map(
               (info) => (
                   <View>
                       <Text>{info.name}</Text>
                       <Text>{info.email}</Text>
                       <Text>{info.id}</Text>
                   </View>
               )
           )
       }
        </View>
    )
}

export default KadyaScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    }
})

// //db.collection("users").document(FirebaseAuth.getInstance().getCurrentUser().getUid())
// .get().addOnCompleteListener(task -> {
//     if(task.isSuccessful() && task.getResult() != null){
//         String firstName = task.getResult().getString("First Name");
//         String email = task.getResult().getString("Email");
//         String phone = task.getResult().getString("Phone");
//         //other stuff
//     }else{
//         //deal with error
//     }
// });