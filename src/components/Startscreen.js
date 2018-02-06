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

 // android: 'Double tap R on you
 export default class Startscreen extends Component {
//test function to test my touchablenativebuttons
  donothing()
{

}
render()
{
return(
<View style={styles.container}>
<Text>Welcome to Ian Pougher's tap it project</Text>
<Text>press the button below to start!</Text>
<Menubutton _onPressButton={()=>this.donothing()} Optiontext='start!'/>
</View>
);
}
}