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
import TimerText from './Timertext'

 // android: 'Double tap R on your keyboard to reload,\n' +
 //   'Shake or press menu button for dev menu',

 //variable for starting the seed of the keys for the buttons found in the grid
 var gridnumb;
 var rownumb;
 var buttonfinder;
 var intervalID = window.setInterval(countdown(), 1000);
export default class Gamescreen extends Component {
  
    //make the score keeper state value, if this hits 15 before the timer state hits 20, change to the victory view
    constructor(props)
    {
        super(props);
        this.state={ score:0 };
        this.state={time:10} ;
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
   
 countdown() {
  this.setState({
    time: this.state.time - 1
  });
}
      createrows(){
        buttonfinder=(Math.floor((Math.random() * 39)+1));
        console.log(buttonfinder);
        gridnumb=0;
        rownumb=0;
        let rows = [];
        for(let i = 0; i < 5; i++) 
        {
          rows.push(this.createWithLoop()); //only use the index as a key if list will not change
          rownumb++;
        }
        return (<View style={{ display: 'flex', flexDirection: 'column', alignContent:'space-between'}}>{rows}</View>);
      }
      createWithLoop(){
        let results = [];
        for(let i = 0; i < 8; i++) 
        {
          if (gridnumb===buttonfinder)
          {
            results.push(<Gridbutton iterationbutton={()=>this.scoreAPoint()} key={gridnumb}/>); //only use the index as a key if list will not change
            console.log(gridnumb);

            gridnumb=gridnumb+1;
          }
          else
          {
            results.push(<Wrongbutton failurepress={()=>this.donothing()} key={gridnumb}/>); //only use the index as a key if list will not change
            console.log(gridnumb);

            gridnumb=gridnumb+1;
          }

        }
        return (<View style={{ display: 'flex', flexDirection: 'row', alignContent:'space-between'}}>{results}</View>);
      }
  render() {
    return (
    <View style={styles.container}>
    <View style={styles.scorebar}>
    <TimerText timerval={this.state.time}/>
    </View>
    <View style={styles.Component}>
    {this.createrows()}
    </View>
    </View>
    );
  }
}



