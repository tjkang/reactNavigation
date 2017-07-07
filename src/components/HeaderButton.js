//import liraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// create a component
class HeaderButton extends Component {

  static propTypes = {
    onPress: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
  };

  static defaultProps = {
    icon: 'md-menu',
  };

  render() {
    return (
      <View style={styles.container}>
        <Ionicons.Button
          name={this.props.icon}
          size={26}
          color="#4F8EF7"
          backgroundColor="transparent"
          onPress={this.props.onPress}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    // position absolutely in the top left corner
    ...StyleSheet.absoluteFillObject,
    top: Platform.OS === 'ios' ? 20 : 0,
    left: 5,
    backgroundColor: 'transparent',
  },
});

//make this component available to the app
export default HeaderButton;
