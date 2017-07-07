//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { onSignUp } from '../services/Auth';

// create a component
const SignUp = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>It's Sign Up Screen</Text>
      <Button
        onPress={() => {
          onSignUp().then(() => navigate('SignedIn'));
        }}
        title='Sign Up'
      />
      <Button
        onPress={() => navigate('SignIn')}
        title='go to SignIn Screen'
        color='#0cc'
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    paddingVertical: 20,
  },
});

//make this component available to the app
export default SignUp;
