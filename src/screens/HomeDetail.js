//import liraries
import React, { Component } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
} from 'react-native';

// create a component
class HomeDetail extends Component {

  render() {
    // Pull navigate out of this.props.navigation
    // and params out of this.props.navigation.state
    const { navigate, state: { params } } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          This is Home Detail screen!
        </Text>
        <Text>
          params.id: {params.id}
        </Text>
        <Button
          onPress={() => navigate('Modal')}
          title="Open Modal"
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
export default HomeDetail;
