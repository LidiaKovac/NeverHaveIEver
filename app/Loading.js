import React, {useState, useEffect} from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { NativeRouter, Route, Link, useHistory } from "react-router-native";
import Questions from "./questions.json"
const styles = StyleSheet.create({
  image: {
    width: 100,
    resizeMode: "contain"
  }
});
const Loading = () => {
const colors = [
    "#29bf12", "#abff4f", "#08bdbd", "#f21b3f", "#ff9914"
]
const [bgColors, setColor] = useState("#08bdbd")
useEffect(()=> {
    setColor(colors[Math.floor(Math.random()*colors.length)])
}, [])
const history = useHistory()
const [timeLeft, setTimeLeft] = useState(5)
useEffect(()=> {
    setTimeout(()=> {
        if (timeLeft > 0) {
            setTimeLeft((prevTime)=> prevTime - 1)
        } else history.push(`/game/${Math.floor(Math.random()*Questions.length)}`)
    }, 1000)
}, [timeLeft])
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
  return (
    <View
      style={{
      display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bgColors,
        width,
        height
      }}>
      <Text style={{fontSize: 24}}>Get Ready! {timeLeft}</Text>
      <Image
           style={styles.image}
        source={require("./assets/1.png")} />
    </View>
  )
}
export default Loading;