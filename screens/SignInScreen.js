import React, {useState} from 'react';
import {
View,
Text,
Image,
StyleSheet,
useWindowDimensions,
ScrollView,
Alert,
SafeAreaView
} from 'react-native';
import Logo from '../assets/syncscorelogo2.png';
import CustomButton from '../components/CustomButton';
import CustomInputField from '../components/CustomInputField';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import Colors from '../Colors/Colors';

const SignInScreen = (props) => {
const {height} = useWindowDimensions();
const navigation = useNavigation();
const [loading, setLoading] = useState(false);

const {
control,
handleSubmit,
formState: {errors},
} = useForm();

const onSignInPressed = async data => {
if (loading) {
  return;
}

setLoading(true);
try {
  const response = await Auth.signIn(data.email, data.password);
  console.log(response);
} catch (e) {
  Alert.alert('Oops', e.message);
}
setLoading(false);
};

const onForgotPasswordPressed = () => {
navigation.navigate('ForgotPassword');
};

const onSignUpPress = () => {
navigation.navigate('CreateAccount');
};

return (

  <View style={styles.root}>

 <View style={styles.logoContainer}>
   <Image
          source={Logo}
          style={[styles.logo, {height: height * 1}]}
          resizeMode="contain"
        />
        </View>

    {/* <CustomInput
      name="email"
      placeholder="Email"
      control={control}
      rules={{required: 'Email is required'}}
    />

    <CustomInput
      name="password"
      placeholder="Password"
      secureTextEntry
      control={control}
      rules={{
        required: 'Password is required',
        minLength: {
          value: 3,
          message: 'Password should be minimum 3 characters long',
        },
      }}
    /> */}

  {/* <View style={styles.logoContainer}><Text>Logo goes here</Text></View> */}


 <View style={styles.inputContainer}>
 
 <CustomInputField
      name="email"
      placeholder="Email"
      control={control}
      rules={{required: 'Email is required'}}
    />

    <CustomInputField
      name="password"
      placeholder="Password"
      secureTextEntry
      control={control}
      rules={{
        required: 'Password is required',
        minLength: {
          value: 8,
          message: 'Password should be minimum 8 characters long',
        },
      }}
    />
    </View>

    <View style={styles.buttonContainer}>

    <CustomButton
      text={loading ? 'Loading...' : 'Sign In'}
      onPress={handleSubmit(onSignInPressed)}
    />

    <CustomButton
      text="Forgot password?"
      onPress={onForgotPasswordPressed}
    />

    <Text style={styles.text}>Don't have an account? Create One</Text>
    <CustomButton
      text="Create Account"
      onPress={onSignUpPress}
    />

    </View>
  </View>
);
};


const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20
    backgroundColor: 'white'
  },
  buttonContainer: {
    // marginTop: 50,
    marginLeft: '50%',
    width: '100%'
  },

  inputContainer: {
    // marginTop: '50%',
    width: '100%',
    marginLeft: '20%'
  },

  logo: {
    // width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'black',
    marginTop: 20,
    textAlignVertical: 'center',
    width: '100%',
    alignItems: 'center'
  }
});

export default SignInScreen;