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
import Gridbutton from './gridbutton'

 // android: 'Double tap R on your keyboard to reload,\n' +
 //   'Shake or press menu button for dev menu',


export default class App extends Component<{}> {
  constructor(props)
  {
      super(props);
      this.state={ score:0 }; 
  }
    scoreAPoint() {
          
      this.setState({
          value: this.state.score + 1
  });
  }

  render() {
    return (
    <View style={styles.container}>
    <Gridbutton buttonstyle={styles.buttonstyling} buttonName='press' iterationbutton={()=>this.scoreAPoint()}/>
    </View>
    );
  }
}


