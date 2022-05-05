import React, { useState, useEffect }from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    View,
    Button,
    ImageBackground,
  } from 'react-native';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { onUpdateSyncScoreSensor } from "../src/graphql/subscriptions";
import { AwsPracticeIot_Identity_Pool_Id, AwsPracticeIot_App_Region, AwsPracticeIot_User_Pool_Id , AwsPracticeIot_User_Pool_Web_Client_Id, AwsPracticeIot_Mqtt_Id } from '@env';
import Colors from "../Colors/Colors";
import Digits from "./Digits";

  
  Amplify.configure({
    Auth: {
  
      identityPoolId: AwsPracticeIot_Identity_Pool_Id,
      region: AwsPracticeIot_App_Region,
      userPoolId: AwsPracticeIot_User_Pool_Id,
      userPoolWebClientId: AwsPracticeIot_User_Pool_Web_Client_Id,
      RoleARN: 'arn:aws:iam::499789067879:role/amplify-awsiotpractice-dev-203239-authRole'
    },
    API:{
      "aws_appsync_graphqlEndpoint": 'https://rk5lam4iyjanxo75p3dzdaiiiu.appsync-api.us-east-1.amazonaws.com/graphql',
      "aws_appsync_region": 'us-east-1',
      "aws_appsync_authenticationType": 'AMAZON_COGNITO_USER_POOLS',
      "aws_appsync_apiKey": 'da2-ulrxmyid75fxrmtam4zuigxmxq',
    },
  });


const ScoreBoard = props => {

    const today = new Date();

    const [splitDigitReady, setSplitDigitReady] = useState(false);

    const [redScore, setRedScore] = useState(0);
    const [blueScore, setBlueScore] = useState(0);

    useEffect( () => {
        const subscription =  API.graphql(
        graphqlOperation(onUpdateSyncScoreSensor)).subscribe({
          next: response => {
            console.log(response.value);
            redScoreData = response.value.data.onUpdateSyncScoreSensor.redScore;
            blueScoreData = response.value.data.onUpdateSyncScoreSensor.blueScore;
            // console.log(scoreData);
            setRedScore(redScoreData);
            setBlueScore(blueScoreData);
            setSplitDigitReady(true); 
            console.log('Score was set');
          },
          error: err => {
            console.log(err);
          }
        })

        return () => {
            console.log('subscription terminated');
            subscription.unsubscribe();
        }
    }, []);

    // var stringDigits = score.toString().split('');
    // var intDigits = stringDigits.map(Number)

    var redStringDigits = redScore.toString().split('');
    var redIntDigits = redStringDigits.map(Number)
    console.log(redIntDigits);

    var blueStringDigits = blueScore.toString().split('');
    var blueIntDigits = blueStringDigits.map(Number)
    console.log(blueIntDigits);

    var redLeftDigit = redIntDigits[0];
    var redRightDigit = redIntDigits[1];
    console.log(redLeftDigit);
    console.log(redRightDigit);

    var blueLeftDigit = blueIntDigits[0];
    var blueRightDigit = blueIntDigits[1];
    console.log(blueLeftDigit);
    console.log(blueRightDigit);
    

    return (
        // <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={Colors.secondaryColor}/>
            <View style={styles.container}>
                <View style={styles.redScoreBoard}>
                    <View style={styles.redScoreBoardCard}><Digits text={redLeftDigit}/></View>
                    <View style={styles.redScoreBoardCard}><Digits text={redRightDigit}/></View>
                </View>
                <View style={styles.blueScoreBoard}>
                    <View style={styles.blueScoreBoardCard}><Digits text={blueLeftDigit}/></View>
                    <View style={styles.blueScoreBoardCard}><Digits text={blueRightDigit}/></View>
                </View>
            </View>
    )};

const styles = StyleSheet.create({
    container: {
       flex: 1,
       flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
        },

    redScoreBoard: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 55
    },

     redScoreBoardCard: {
         height: 120,
         width: 60,
         backgroundColor: Colors.redTeamColor,
         borderColor: 'black',
         borderWidth: 2,
         margin: 0.4,
         alignItems: 'center'
     },

     blueScoreBoard: {
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'center',
         marginRight: 55
     },

     blueScoreBoardCard: {
        height: 120,
        width: 60,
        backgroundColor: Colors.blueTeamColor,
        borderColor: 'black',
        borderWidth: 2,
        margin: 0.4
     }
    });

export default ScoreBoard;