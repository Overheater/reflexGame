import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import styles from '../styles/Styles';

export default class gridbutton extends Component {
    render() {
        return (
            
                <TouchableOpacity
                    onPress={() => this.props.iterationbutton()}
                    style={styles.correctbuttonstyling}>
                </TouchableOpacity>
            
        );
    }
}