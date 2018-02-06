import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableNativeFeedback
} from 'react-native';

import styles from '../styles/Styles'

export default class Menubutton extends Component {
    render(){
    return (
            <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={{width: 150, height: 100, backgroundColor: '#6DCF46'}}>
                <Text style={{margin: 30}}>{this.props.Optiontext}</Text>
            </View>
            </TouchableNativeFeedback>
        );
    }
}
