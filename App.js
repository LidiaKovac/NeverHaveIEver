import React, {useState, useEffect} from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Loading from "./app/Loading.js"
import Game from "./app/Game.js"
import Home from "./app/Home.js"
import { NativeRouter, Route, Link, useHistory } from "react-router-native";
const styles = StyleSheet.create({
  image: {
    width: 100,
    resizeMode: "contain"
  }
});
const App = () => {

  return (
  <NativeRouter>
    <Route exact path='/' component={Home} />
    <Route exact path="/pre" render={()=> (<Loading/>)}/>
    <Route exact path="/game/:index" component={Game} />
  </NativeRouter>
  )
}
export default App;