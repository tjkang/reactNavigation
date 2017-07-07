//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { onSignIn } from '../services/Auth';

// create a component
const SignIn = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>It's Sign In Screen</Text>
      <Button
        onPress={() => {
          onSignIn().then(() => navigate('SignedIn'));
        }}
        title='Sign In'
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
export default SignIn;
