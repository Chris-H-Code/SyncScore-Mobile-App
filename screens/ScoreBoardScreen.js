import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import CustomButton from '../components/CustomButton';
import ScoreBoard from '../components/ScoreBoard';
import { Auth } from 'aws-amplify';



const ScoreBoardScreen = props => {

    const signOut = () => {
        Auth.signOut();
      };

    return (
        <>
        <View style={styles.screen}>
        <ScoreBoard />
        <CustomButton onPress={signOut} text='End Game'/>
        </View>
        </>
    )
};



const styles = StyleSheet.create({
    screen: {                                                                                                                                                                                                                               
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ScoreBoardScreen;