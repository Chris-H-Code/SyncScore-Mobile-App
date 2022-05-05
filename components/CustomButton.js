import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';
import Colors from '../Colors/Colors';

const CustomButton = props => {
  return (
  
    <Pressable
      onPress={props.onPress}
      style={styles.container}>
      <Text
        style={styles.text}>
        {props.text}
      </Text>
    </Pressable>
    
  );
};

// const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
//     return (
//       <Pressable
//         onPress={onPress}
//         style={[
//           styles.container,
//           styles[`container_${type}`],
//           bgColor ? {backgroundColor: bgColor} : {},
//         ]}>
//         <Text
//           style={[
//             styles.text,
//             styles[`text_${type}`],
//             fgColor ? {color: fgColor} : {},
//           ]}>
//           {text}
//         </Text>
//       </Pressable>
//     );
//   };

const styles = StyleSheet.create({

  container: {
    width: '50%',
    padding: 15,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,

    backgroundColor: Colors.secondaryColor
  },

  // container_PRIMARY: {
  //   backgroundColor: '#3B71F3',
  // },

  // container_SECONDARY: {
  //   borderColor: '#3B71F3',
  //   borderWidth: 2,
  // },

  // container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  // text_SECONDARY: {
  //   color: '#3B71F3',
  // },

  // text_TERTIARY: {
  //   color: 'gray',
  // },
});

export default CustomButton;