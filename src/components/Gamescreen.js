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
import SecondLevel from './SecondLevel'

 // android: 'Double tap R on your keyboard to reload,\n' +
 //   'Shake or press menu button for dev menu',

 //variable for starting the seed of the keys for the buttons found in the grid
 var gridnumb;
 var rownumb;
 var buttonfinder;

export default class Gamescreen extends Component {
  
    //make the score keeper state value, if this hits 15 before the timer state hits 20, change to the victory view
    constructor(props)
    {
   
        super(props);
        this.buttonfinder=(Math.floor((Math.random() *1000)%40));
        this.state={time:10,score:0,currentpart: 'Game'} ;
        

        //this.countdown();
        this.intervalID = setInterval(()=>this.countdown(), 1000);
    }

 
    //the state function that adds a point to the state value, presumably when you press the blue buttton
      scoreAPoint() {
        this.buttonfinder=(Math.floor((Math.random()  *1000)%40));
        this.setState({
            score: this.state.score + 1
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

      LoseGame()
      {
       
          this.setState({
            currentpart:'Loss'
          });
         
      }
      WinGame()
      {
       
          this.setState({
            currentpart:'Win'
          });
         
      }
      nextgame()
      {
       
          this.setState({
            currentpart:'Next'
          });
         
      }
      Restart()
      {
       
          this.setState({
            currentpart:'Restart'
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
    <Gridbutton iterationbutton={()=>this.Restart()} />
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
  <Text style={styles.ScreenText}>Ready to play the next level?</Text>
  <Text style={styles.ScreenText}>Press the  button below!</Text>
  <Gridbutton iterationbutton={()=>this.nextgame()} />
  </View>
);
  }
  if(this.state.currentpart==='Next')
  {
    return(
    <View style={styles.container}>
    <SecondLevel/>
</View>
    );
  }
  if(this.state.currentpart==='Restart')
  {
    return(
    <View style={styles.container}>
    <Gamescreen/>
</View>
    );
  }

}
}



