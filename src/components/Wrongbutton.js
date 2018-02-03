import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableNativeFeedback
} from 'react-native';

import styles from '../styles/Styles';

export default class Wrongbutton extends Component {
    render() {
        return (
            
                    <TouchableNativeFeedback
                    onPress={() => this.props.failurepress()}
                    style={styles.incorrectbuttonstyling}>                    
                    </TouchableNativeFeedback>
            
        );
    }
}