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
import PointText from './PointText'
import GameScreen from './Gamescreen'

 // android: 'Double tap R on your keyboard to reload,\n' +
 //   'Shake or press menu button for dev menu',

 //variable for starting the seed of the keys for the buttons found in the grid
 var gridnumb;
 var rownumb;
 var buttonfinder;

export default class SecondLevel extends Component {
  
    //make the score keeper state value, if this hits 15 before the timer state hits 20, change to the victory view
    constructor(props)
    {
   
        super(props);
        this.buttonfinder=(Math.floor((Math.random() *1000)%40));
        this.state={time:10,score:0,currentpart: 'Game'} ;
        

        //this.countdown();
        this.intervalID = setInterval(()=>this.countdown(), 1000);
    }

 
    //the state function that adds a point to the state value, presumably when you press the gold buttton
      scoreAPoint() {
        this.buttonfinder=(Math.floor((Math.random()  *1000)%40));
        this.setState({
            score: this.state.score + 1
    });
    }
    //dummy function for the first version of the game
    Failure()
    {
        this.setState({
            currentpart:'Failure'
          });
         
    }
   
 countdown() {
  this.setState({
    time: this.state.time - 1
  });
  if(this.state.time===0&&this.state.score<4)
  {
    this.LoseGame();
  }
  else if(this.state.time===0&& this.state.score>4)
  {
    this.WinGame();
  }
  };

      createrows(){
        
        console.log(buttonfinder);
        gridnumb=0;
        rownumb=0;
        let rows = [];
        for(let i = 0; i < 8; i++) 
        {
          rows.push(this.createWithLoop()); //only use the index as a key if list will not change
          rownumb++;
        }
        return (<View style={{ display: 'flex', flexDirection: 'column', alignContent:'space-between'}}>{rows}</View>);
      }

      createWithLoop(){
        let results = [];
        for(let i = 0; i < 5; i++) 
        {
          if (gridnumb===this.buttonfinder)
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
      WinGame()
      {
       
          this.setState({
            currentpart:'Win'
          });
         
      }
      menu()
      {
       
          this.setState({
            currentpart:'Menu'
          });
         
      }
      LoseGame()
      {
       
          this.setState({
            currentpart:'Loss'
          });
         
      }
      StartGame()
      {
       
          this.setState({
            currentpart:'FirstGame'
          });
         
      }
  render() {
if(this.state.currentpart==='Game'){
  return (
    <View style={styles.container}>
    <View style={styles.scorebar}>
    <TimerText timerval={this.state.time}/>
    <PointText PointVal={this.state.score}/>
    </View>
    <View style={styles.Component}>
    {this.createrows()}
    </View>
    </View>

    );
  }
  if(this.state.currentpart==='Loss'){
  return(
    <View style={styles.container}>
    <Text style={styles.ScreenText}>You Lost!</Text>
    <Text style={styles.ScreenText}>You Needed 15 Correct button presses,</Text>
    <Text style={styles.ScreenText}>You got</Text>
    <PointText pointstyle={styles.ScreenText} PointVal={this.state.score}/>
    </View>
  );
  }
  if(this.state.currentpart==='Win')
  {
return(
  <View style={styles.container}>
  <Text style={styles.ScreenText}>You Won!</Text>
  <Text style={styles.ScreenText}>You Needed 15 Correct button presses,</Text>
  <Text style={styles.ScreenText}>You got</Text>
  <PointText pointstyle={styles.ScreenText} PointVal={this.state.score}/>
  <Text style={styles.ScreenText}>You beat my game! Congratulations</Text>
  <Text style={styles.ScreenText}>Press the  button below to go back to the main menu</Text>
  <Gridbutton iterationbutton={()=>this.menu()} />
  
  </View>
);
  }
  if(this.state.currentpart==='Failure')
  {
    <View style={styles.container}>
      <Text style={styles.ScreenText}>You Lost!</Text>
      <Text style={styles.ScreenText}>You Pressed an incorrect button</Text>
      <Text style={styles.ScreenText}>if you want to try again, press the button below</Text>
        
    </View>
  }
   if(this.state.currentpart==='Menu'){
    return (
      <View style={styles.container}>
      <Text style={styles.ScreenText}>Welcome to Ian Pougher's tap it project</Text>
      <Text style={styles.ScreenText}>press the button below to start!</Text>
      <Gridbutton iterationbutton={()=>this.Startgame()} />
      </View>
    );
  }
  if(this.state.currentpart==='FirstGame'){
    return (
      <View style={styles.container}>
        <GameScreen/>
      </View>
    );
  }

}
}