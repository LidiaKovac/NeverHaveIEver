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
let questions = Questions
const [question, setQuestion] = useState({...Questions[0]})
const [visited, setVisited] = useState([0])
const [index, setIndex] = useState(0)
//useEffect(()=> {
//    questions = [...Questions]
//}, [])
//const randomize = (questList) => {
//    let number =
//    return number
//}
//const filter = (questList, current) => {
//
//    console.log(filteredQuest)
//    return filteredQuest
//}
const nextQuestion = () => {
    let num = Math.floor(Math.random()*(questions.length - 1))
    setQuestion(questions[num])
    setVisited([...visited, num])
//    questions = questions.filter((q) => !q.question.includes(question.question))
    questions.splice(num,1)
    console.log(num, questions)
    setColor(colors[Math.floor(Math.random()*colors.length)])
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
            nextQuestion()
        } }>
            <Text style={styles.text}> {question ? question.question : "No questions left! :D"} </Text>
            <View style={styles.shots}>

                {
                    question && question.shots && question.shots.length > 0  && question.shots.map((s,i)=> <Image key={i} style={styles.shot}  source={require("./assets/glass.png")}/>)
                }

            </View>
        </Pressable>
    )
}
export default Game;