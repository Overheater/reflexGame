import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableNativeFeedback
} from 'react-native';

import styles from '../styles/Styles';

export default class gridbutton extends Component {

    render() {
        return (
            
            {createbuttongrid()}
            
        );
    }
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
        <Wrongbutton></Wrongbutton>
      }
      gridnumb++;
    }
  }
}