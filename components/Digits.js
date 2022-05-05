import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    View,
    Button,
    ImageBackground,
  } from 'react-native';
import Colors from "../Colors/Colors";

const Digits = props => {
    return (
        <Text style={styles.text}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: Colors.digitColor,
        fontSize: 100,
        fontStyle: 'normal'
    }
    });

export default Digits;