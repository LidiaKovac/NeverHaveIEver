import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Dimensions, Pressable, Image} from "react-native"
import Questions from "./questions.json"
import {useParams} from "react-router-native"
const Game = ()=> {
const colors = [
    "#29bf12", "#abff4f", "#08bdbd", "#f21b3f", "#ff9914"
]
const [bgColors, setColor] = useState("#08bdbd")

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const [question, setQuestion] = useState({question: "Question", shots: 1})
useEffect(()=> {
    setColor(colors[Math.floor(Math.random()*colors.length)])
    setQuestion(randomizeQuestion())
    console.log(question.shots)

}, [])
const randomizeQuestion = () => {
    return Questions[Math.floor(Math.random()*Questions.length)]
}

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: bgColors,
        width: width,
        height: height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        transform: [{rotate: '90deg'}],
        color: "black",
        fontSize: 24
    },
    shots: {
       display: "flex",
       flexDirection: "row"
    },
    shot: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        transform: [{translateY: 250 }, {rotate: "90deg"}],
        marginLeft: 20
    }
})
return (
        <Pressable style={styles.wrap} onPressIn={()=> {
            setQuestion(randomizeQuestion())
            setColor(colors[Math.floor(Math.random()*colors.length)])
        } }>
            <Text style={styles.text}> {question.question} </Text>
            <View style={styles.shots}>

                {
                    question.shots.length > 0  && question.shots.map((s,i)=> <Image key={i} style={styles.shot}  source={require("./assets/glass.png")}/>)
                }

            </View>
        </Pressable>
    )
}
export default Game;