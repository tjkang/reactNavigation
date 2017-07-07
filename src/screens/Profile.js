//import liraries
import React, { Component } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { NavigationActions } from 'react-navigation'

import { onSignOut } from '../services/Auth';
import HeaderButton from '../components/HeaderButton';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'SignedOut'})
  ],
  key: null
});


// create a component
class Profile extends Component {

  static navigationOptions = {
    // Customize header background color to make it look cleaner
    headerStyle: {
      backgroundColor: '#fff',
    },
    // title: `Profile for ${navigation.state.params.user}`,
  };

  render() {
    const { navigate, dispatch } = this.props.navigation;
    return (
      <View style={styles.container}>
        <HeaderButton
          onPress={() => navigate('DrawerOpen')}
        />
        <Text style={styles.header}>
          This is profile screen!
        </Text>
        <Button
          onPress={() => {
            onSignOut().then(dispatch(resetAction));
          }}
          title="Logout"
        />
      </View>
    );
  }
}

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
    marginVertical: 20,
  },
});

//make this component available to the app
export default Profile;
