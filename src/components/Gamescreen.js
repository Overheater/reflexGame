import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  flex
} 
from 'react-native';
import styles from '../styles/Styles'
import Gridbutton from './Gridbutton'
import Wrongbutton from './Wrongbutton'
import Gridfield from './Gridfield'

 // android: 'Double tap R on your keyboard to reload,\n' +
 //   'Shake or press menu button for dev menu',


export default class Gamescreen extends Component {
    //make the score keeper state value, if this hits 15 before the timer state hits 20, change to the victory view
    constructor(props)
    {
        super(props);
        this.state={ score:0 }; 
    }
 
    //the state function that adds a point to the state value, presumably when you press the blue buttton
      scoreAPoint() {
            
        this.setState({
            value: this.state.score + 1
    });
    }


  render() {
    return (
    <View style={styles.container}>
      <Gridfield/>
    </View>
    );
  }
}


