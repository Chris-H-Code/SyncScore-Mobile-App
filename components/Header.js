import React from "react";
import { 
    ImageBackground, 
    StyleSheet, 
    Text, 
    View 
} from "react-native";


const image = { uri: "https://cdn.pixabay.com/photo/2015/02/25/11/39/robot-648622_1280.jpg" };

const Header = props => {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="contain" style={styles.image}>
          <Text style={styles.text}>{props.text}</Text>
        </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      //flex: 1
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

  export default Header;
