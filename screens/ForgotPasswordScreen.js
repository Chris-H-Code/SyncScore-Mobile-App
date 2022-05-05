import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInputField from '../components/CustomInputField';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const ForgotPasswordScreen = () => {
const {control, handleSubmit} = useForm();
const navigation = useNavigation();
const [loading, setLoading] = useState(false);

const onSendPressed = async data => {
if (loading) {
    return;
}

setLoading(true);

try {
  const response = await Auth.forgotPassword(data.Email);
  console.log(response);
  navigation.navigate('NewPassword');
} catch (e) {
  Alert.alert('Oops', e.message);
}

setLoading(false)

};

const onSignInPress = () => {
navigation.navigate('SignIn');
};

return (
<ScrollView showsVerticalScrollIndicator={false}>
  <View style={styles.root}>
    <Text style={styles.title}>Reset your password</Text>

    <CustomInputField
      name="Email"
      control={control}
      placeholder="Email"
      rules={{
        required: 'Email is required',
      }}
    />

    <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

    <CustomButton
      text="Back to Sign in"
      onPress={onSignInPress}
      type="TERTIARY"
    />
  </View>
</ScrollView>
);
};

const styles = StyleSheet.create({
root: {
alignItems: 'center',
padding: 20,
},
title: {
fontSize: 24,
fontWeight: 'bold',
color: '#051C60',
margin: 10,
},
text: {
color: 'gray',
marginVertical: 10,
},
link: {
color: '#FDB075',
},
});

export default ForgotPasswordScreen;
