import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import {
  DrawerItems,
} from 'react-navigation';

export default class Drawer extends Component {
  render() {
    const { navigate } = this.props.navigation;

    const divideIndex = 2;
    const dividePadding = 10;

    const DrawerItemsTopProps = Object.assign({}, this.props, { items: this.props.navigation.state.routes.slice(0,divideIndex) });
    const DrawerItemsBottomProps = Object.assign({}, this.props, { items: this.props.navigation.state.routes.slice(divideIndex) });
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Drawer Header
          </Text>
        </View>
        <ScrollView>
          <View style={{ paddingBottom: dividePadding }}>
            <DrawerItems {...DrawerItemsTopProps} />
          </View>
          <View style={[styles.bottomDrawer, { paddingTop: dividePadding }]}>
            <DrawerItems {...DrawerItemsBottomProps} />
          </View>
          <Button
            onPress={() => navigate('Modal')}
            title="Open Modal"
            color='#0cc'
          />
          <Button
            onPress={() => navigate('DrawerClose')}
            title="Close Me"
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    backgroundColor: '#0dece2ed',
  },
  headerText: {
    fontSize: 20,
    marginVertical: 20,
  },
  bottomDrawer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#d1d1d1',
  }
});