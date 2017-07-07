import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
 } from 'react-native';

import { createRootNavigator } from './navigation/AppNavigation';
import { isSignedIn } from './services/Auth';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignedIn: false,
    };
  }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignedIn: true }))
      .catch(err => alert('An Error occurred'));
  }

  render() {
    const { checkedSignedIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignedIn) {
      return (
        <View style={styles.container}>
          <Text stley={{ fontSize: 20 }}>Loading.....</Text>
        </View>
      );
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
