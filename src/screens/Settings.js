//import liraries
import React, { Component } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import HeaderButton from '../components/HeaderButton';

// create a component
class Settings extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <HeaderButton
          onPress={() => navigate('DrawerOpen')}
        />
        <Text style={styles.header}>
          This is Settings Page!
        </Text>
        <Button
          onPress={() => navigate('Profile', { user: 'Tom' })}
          title="Go to Profile"
        />
        <Button
          onPress={() => navigate('Modal')}
          title="Open Modal"
          color='#0cc'
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
  }
});

//make this component available to the app
export default Settings;
