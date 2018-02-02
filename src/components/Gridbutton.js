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
            
                <TouchableNativeFeedback
                    onPress={() => this.props.iterationbutton()}>
                    <View style={styles.correctbuttonstyling}>
                    
                    </View>
                </TouchableNativeFeedback>
            
        );
    }
}