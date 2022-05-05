import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import BoardSelectionScreen from '../screens/BoardSelectionScreen';
import CourtsScreen from '../screens/CourtsScreen';
import {Auth, Hub} from 'aws-amplify';
import ScoreBoardScreen from '../screens/ScoreBoardScreen';
import Colors from '../Colors/Colors';

const Stack = createNativeStackNavigator();

const Navigation = () => {
const [user, setUser] = useState('');

const checkUser = async () => {
try {
  const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
  setUser(authUser);
} catch (e) {
  setUser(null);
}
};

useEffect(() => {
checkUser();
}, []);

useEffect(() => {
const listener = data => {
  if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
    checkUser();
  }
};

Hub.listen('auth', listener);
return () => Hub.remove('auth', listener);
}, []);

if (user === undefined) {
return (
  // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <ActivityIndicator />
  // </View>
);
}

return (
<NavigationContainer>
  <Stack.Navigator>
    {user ? (
      // Uncomment the code below if you decide to make a courts screen
      // <Stack.Screen name="Courts" component={CourtsScreen} /> 
      // <Stack.Screen name="Board Select" 
      // component={BoardSelectionScreen} 
      // options={{ title: 'Select Team',
      //   headerStyle: {
      //     backgroundColor: Colors.secondaryColor
      //   },
      //   headerTitleStyle: {
      //     color: 'white'
      //   }}}/> 
      <Stack.Screen name="ScoreBoard" 
      component={ScoreBoardScreen} 
      options={{ title: 'SyncScore',
        headerStyle: {
          backgroundColor: Colors.secondaryColor
        },
        headerTitleStyle: {
          color: 'white'
        }}}/> 
    ) : (
      <>
        <Stack.Screen 
        name="SignIn" 
        component={SignInScreen} 
        options={{ title: 'Sign In',
        headerStyle: {
          backgroundColor: Colors.secondaryColor
        },
        headerTitleStyle: {
          color: 'white'
        }}}/>
        <Stack.Screen name="CreateAccount" 
        component={CreateAccountScreen} 
        options={{ title: 'Create Account',
        headerStyle: {
          backgroundColor: Colors.secondaryColor
        },
        headerTitleStyle: {
          color: 'white'
        }}}
        />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ title: 'Forgot Password',
        headerStyle: {
          backgroundColor: Colors.secondaryColor
        },
        headerTitleStyle: {
          color: 'white'
        }}}
        />
        <Stack.Screen name="NewPassword" 
        component={NewPasswordScreen}
        options={{ title: 'Reset Password',
        headerStyle: {
          backgroundColor: Colors.secondaryColor
        },
        headerTitleStyle: {
          color: 'white'
        }}}
        />
      </>
    )}
  </Stack.Navigator>
</NavigationContainer>
);
};

export default Navigation;
