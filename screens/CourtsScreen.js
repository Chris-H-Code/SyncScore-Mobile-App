import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View,
  Button,
  ImageBackground,
} from 'react-native';
import CustomButton from '../components/CustomButton';
// import {useForm, Controller} from 'react-hook-form';
// import CustomInputField from './components/CustomInputField';
import {Auth} from 'aws-amplify';

const image = { uri: "https://cdn.pixabay.com/photo/2015/02/25/11/39/robot-648622_1280.jpg" };


const CourtsScreen = props => {

    const signOut = () => {
        Auth.signOut();
      };

      const alertTest = () => {
        alert('It works!');
        // console.log('Hey');
        return;
      }

    return (
        <>
      <View style={styles.containerOne}>
        <ImageBackground source={image} resizeMode="contain" style={styles.image}>
          <Text style={styles.text}>{props.text}</Text>
          <CustomButton onPress={signOut} text='Sign out'/>
          <CustomButton onPress={alertTest} text='Alert test'/>
        </ImageBackground>
        <View style={styles.container}><Text>Hello</Text></View>
      </View>
      
      </>
    );
  }

  const styles = StyleSheet.create({
    containerOne: {
    //   flex: 1
    backgroundColor: 'red'
    },
    image: {
      width: '100%',
      height: '100%',
      //flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      alignContent: 'center'
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });

  export default CourtsScreen;