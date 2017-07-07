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
class Modal extends Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <HeaderButton
          icon="md-close"
          onPress={() => goBack()}
        />
        <Text style={styles.header}>
          Hi, I'm a Modal!
        </Text>
        <Button
          onPress={() => goBack()}
          title="Close Me"
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
    backgroundColor: '#d1d1d1',
  },
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
});

//make this component available to the app
export default Modal;
