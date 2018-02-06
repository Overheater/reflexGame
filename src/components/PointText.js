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
export default class PointText extends  Component
{
    render() {
        return (
        <Text>{this.props.PointVal}</Text>
                );
            }
}