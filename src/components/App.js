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

  donothing()
  {
  //nothing to see here
  };
  render() {
    return (
    <View style={styles.container}>

      <Gamescreen/>
    </View>
    );
  }
}


