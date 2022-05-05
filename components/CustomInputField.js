import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';

const CustomInputField = ({
    control,
    name,
    rules = {},
    placeholder,
    secureTextEntry,
  }) => {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
            <View
              style={[
                styles.container,
                {borderColor: error ? 'red' : 'black'},
              ]}>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
              />
            </View>
            {error && (
              <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
            )}
          </>
        )}
      />
    );
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: '80%',
      padding: 9,
  
      // borderColor: '#e8e8e8',
      borderWidth: 2,
      borderRadius: 5,
      borderColor: 'black',
  
      paddingHorizontal: 10,
      marginVertical: 5,
    },
    input: {},
  });
  
  export default CustomInputField;