/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback
} 
from 'react-native';
import styles from '../styles/Styles'
import Gridbutton from './Gridbutton'
import Gamescreen from './Gamescreen'

 // android: 'Double tap R on your keyboard to reload,\n' +
 //   'Shake or press menu button for dev menu',


export default class App extends Component {
  constructor(props){
    super(props);
  this.state={currentpart: 'Start'};
}
 gamescreen(props)
{
  return(<Gamescreen/>)
}
  Startgame()
  {
   
      this.setState({
        currentpart:'Game'
      });
     
  }
  render() {
    if(this.state.currentpart==='Game'){
      return(
          <View style={styles.container}>
          <Gamescreen/>
          </View>
        );
       }
   else if(this.state.currentpart==='Start'){
    return (
      <View style={styles.container}>
      <Text style={styles.ScreenText}>Welcome to Ian Pougher's tap it project</Text>
      <Text style={styles.ScreenText}>press the button below to start!</Text>
      <Gridbutton iterationbutton={()=>this.Startgame()} />
      </View>
    );
  }
  else
  {
return(

  <View style={styles.container}>
  <Text>Else statement</Text>
  </View>
);

  }

  }
}


