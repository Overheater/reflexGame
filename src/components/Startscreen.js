import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  touchableOpacity,
  flex
} 
from 'react-native';
import styles from '../styles/Styles'
import Gridbutton from './Gridbutton'
import Wrongbutton from './Wrongbutton'
import Menubutton from './menubuttons'
import Gamescreen from './Gamescreen';

 // android: 'Double tap R on you

 export default class Startscreen extends Component {
//test function to test my touchablenativebuttons
Startgame()
{
  return(
    <View style={styles.container}>
    <Gamescreen/>
    </View>
    );
}
render()
{
return(
<View style={styles.container}>
<Text style={styles.ScreenText}>Welcome to Ian Pougher's tap it project</Text>
<Text style={styles.ScreenText}>press the button below to start!</Text>
<Gridbutton iterationbutton={()=>this.Startgame()}/>
</View>
);
}
}