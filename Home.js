import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Dimensions, Pressable, TouchableOpacity} from "react-native"
import {useParams, useHistory} from "react-router-native"

const Home = ()=> {
const history = useHistory()
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const move = () => {
    history.push("/pre")
}
const styles = StyleSheet.create({
    wrap: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F21B3F",
        width,
        height
    },
    button: {
        width: width / 2,
        height: 60,
        backgroundColor: "white",
        color: "black",
        margin: 20,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    disabled: {
        width: width / 2,
        height: 60,
        backgroundColor: "lightgray",
        color: "gray",
        margin: 20,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }
})
return (
    <View style={styles.wrap}>
        <TouchableOpacity style={styles.button} onPress={()=> history.push("/pre")} >
            <Text style={{fontSize: 22}}>Drink! 🥃</Text>
        </TouchableOpacity>
        <View style={styles.disabled}>
            <Text style={{fontSize: 18}}>Custom (Coming soon)</Text>
        </View>
        <View style={styles.disabled}>
            <Text style={{fontSize: 18}}>Login (Coming soon)</Text>
        </View>
    </View>)
}
export default Home;