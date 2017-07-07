// import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from '../screens/Home';
import HomeDetailScreen from '../screens/HomeDetail';

// Stack navigation for Home and Home Detail screens
const HomeStackNav = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,             // Hide the header
      headerBackTitle: 'Back',  // Title back button Back when we navigate to HomeDetail from Home
    },
  },
  HomeDetail: {
    screen: HomeDetailScreen,
    navigationOptions: ({ navigation }) => ({
      // Customize header's title with user name passed to navigate()
      // You can pass any props you'd like. For instance: navigate('HomeDetail', { id: '123' }
      // title: `id ${navigation.state.params.id}`,
    })
  },
}, {
  headerMode: 'screen',
});

export default HomeStackNav;
