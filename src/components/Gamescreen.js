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
    //dummy function for the first version of the game
    donothing()
    {
    //nothing to see here
    }
    createbuttongrid()
      {
      gridnumb=0;
      buttonfinder=((Math.random() * 40));
        for(let i=0; i<5;i++)
        {
          for(let j=0; j<8; j++)
          {
            if(gridnumb===buttonfinder)
            {<Gridbutton iterationbutton={()=>this.scoreAPoint()}></Gridbutton>}
            else
            {
              <Wrongbutton failurepress={()=>this.donothing()}></Wrongbutton>
            }
            gridnumb++;
          }
        }
      }
      createWithLoop(){
        let results = [];
        for(let i = 0; i < 8; i++) 
        {
          results.push(<Gridbutton iterationbutton={()=>this.donothing()} key={i}/>); //only use the index as a key if list will not change
        }
        return (<View style={{flexDirection: 'row', justifyContent:'space-between'}}>{results}</View>);
      }
  render() {
    return (
    <View style={styles.container}>
    <View style={styles.scorebar}></View>
    <View style={styles.Component}>
    {this.createWithLoop()}
    </View>
    </View>
    );
  }
}



