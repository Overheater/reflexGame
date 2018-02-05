import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import styles from '../styles/Styles';

export default class Wrongbutton extends Component {
    render() {
        return (
            
                    <TouchableOpacity
                    onPress={() => this.props.failurepress()}
                    style={styles.incorrectbuttonstyling}>                    
                    </TouchableOpacity>
            
        );
    }
}