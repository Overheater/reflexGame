import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import styles from '../styles/Styles';
// enables the state function for iterating the number after pressing either button
export default class Timertext extends  Component
{
    render() {
        return (
        <Text style={styles.ScreenText}>{this.props.timerval}</Text>
                );
            }
}