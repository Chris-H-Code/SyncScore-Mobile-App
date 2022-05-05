import React, { useState, useEffect, useCallback }  from 'react';
import { 
    View, 
    Text, 
    FlatList, 
    StyleSheet, 
    TouchableOpacity } from 'react-native';
import  DropDownPicker  from 'react-native-dropdown-picker';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import CustomButton from '../components/CustomButton';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { getUser } from '../src/graphql/queries';
import { AwsPracticeIot_Identity_Pool_Id, AwsPracticeIot_App_Region, AwsPracticeIot_User_Pool_Id , AwsPracticeIot_User_Pool_Web_Client_Id, AwsPracticeIot_Mqtt_Id } from '@env';
// import { useCallback } from 'react/cjs/react.production.min';

const BoardSelectionScreen = props => {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(null);
  const [teamColor, setTeamColor] = useState([
    {label: 'Red', value: 'red'},
    {label: 'Blue', value: 'blue'}
  ]);

  const [targetScore, setTargetScore] = useState([
    {label: '5', value: '5'},
    {label: '10', value: '10'},
    {label: '15', value: '15'},
    {label: '20', value: '20'},
    {label: '25', value: '25'},
  ]);

  const onTeamColorOpen = useCallback(() => {
    setOpen2(false);
  }, []);

  const onTargetScoreOpen = useCallback(() => {
    setOpen1(false);
  }, []);

    const [user, setUser] = useState('');

    const signOut = () => {
        Auth.signOut();
      };

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
          "aws_appsync_apiKey": 'da2-4oxp453rhna6jlp3y3jcu62ygy	',
        },
      });

      

    useEffect(  () => {
      const fetchUser = async () => {
        // get Authenticated user from Auth
        const userInfo = await Auth.currentAuthenticatedUser( {bypassCache: true})
        // console.log(userInfo);

        if (userInfo) {
        //   // get the user from backend with the user sub from Auth aka the sub parameter in the object returned from userInfo

          const userQuery = await API.graphql(
            graphqlOperation(
              getUser, 
              { id: 'a486e75d-79db-4756-8609-cbdd2a64a0b3' }))
              console.log('User info: ', userQuery);
              setUser(userQuery.data.getUser.email);
              console.log(user)
        }

        
        // get the user from Backend with the user Id from Auth

        // if there is no User in database with this Id, then create one

      }

      fetchUser();
    }, []);

    return(
        <>
        <View style={styles.screen}>
            <Text>Hello, {user}!</Text>
            <DropDownPicker
            onChangeValue={ (value) => console.log(value) }
            style={{borderColor: 'blue', width: '50%', marginLeft: '25%'}}
            placeholder={'Select your team'}
      open={open1}
      value={value}
      items={teamColor}
      setOpen={setOpen1}
      setValue={setValue}
      setItems={setTeamColor}
      zIndex={3000}
    zIndexInverse={1000}
    onOpen={onTargetScoreOpen}
    />

<DropDownPicker
            onChangeValue={ (value) => console.log(value) }
            style={{borderColor: 'black', width: '50%', marginLeft: '25%'}}
            placeholder={'Select target score'}
      open={open2}
      value={value}
      items={targetScore}
      setOpen={setOpen2}
      setValue={setValue}
      setItems={setTargetScore}
      zIndex={2000}
    zIndexInverse={2000}
    onOpen={onTeamColorOpen}
    />

             <CustomButton onPress={signOut} text='Sign Out'/>
        </View>
        
        </>
    );

};


const styles = StyleSheet.create({
    screen: {                                                                                                                                                                                                                               
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectBox: {
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default BoardSelectionScreen;