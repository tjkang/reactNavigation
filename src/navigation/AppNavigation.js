import React from 'react';
import { Platform, StatusBar } from 'react-native';
import {
  StackNavigator,
  DrawerNavigator,
} from 'react-navigation';

import { Ionicons as Icon } from '@expo/vector-icons';

// Nav
import HomeStakNav from './HomeNavigation';

// screens
import SignUpScreen from '../screens/SignUp';
import SignInScreen from '../screens/SignIn';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';
import ModalScreen from '../screens/Modal';

import Drawer from './Drawer';

const ICON_PREFIX = (Platform.OS === 'ios' ? 'ios' : 'md');
const ICON_POSTFIX = (Platform.OS === 'ios' ? '-outline' : '');

// signin 하지 않았을때의 layout
const SignedOutStackNav = StackNavigator({
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      title: 'Sign Up',
    },
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      title: 'Sign In',
    },
  },
});

// signin 했을때의 layout
const SignedInDrawerNav = DrawerNavigator({
  Home: {
    screen: HomeStakNav,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? `${ICON_PREFIX}-home` : `${ICON_PREFIX}-home${ICON_POSTFIX}`}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? `${ICON_PREFIX}-information-circle` : `${ICON_PREFIX}-information-circle${ICON_POSTFIX}`}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? `${ICON_PREFIX}-settings` : `${ICON_PREFIX}-settings${ICON_POSTFIX}`}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
}, {
  // Register custom drawer component
  contentComponent: props => <Drawer {...props} />,
  contentOptions: {
    activeTintColor: '#e91e63',
    activeBackgroundColor: 'transparent',
    style: {
      marginTop: 0,
      marginVertical: 0,
      paddingVertical: 0,
      borderWidth: 0,
    }
  },
});

export const createRootNavigator = (signedIn = false) => StackNavigator(
    {
      SignedIn: {
        screen: SignedInDrawerNav,
        navigationOptions: {
          gesturedEnabled: false,
        },
      },
      SignedOut: {
        screen: SignedOutStackNav,
        navigationOptions: {
          gesturedEnabled: false,
        },
      },
      Modal: {
        screen: ModalScreen,
      },
    },
    {
      // No headers for modals. Otherwise we'd have two headers on the screen, one for stack, one for modal.
      headerMode: 'none',
      // In modal mode screen slides up from the bottom
      mode: 'modal',
      cardStyle: { paddingTop: StatusBar.currentHeight }, // for android
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
    }
  );

/*
import React from 'react';
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import { Ionicons as Icon } from '@expo/vector-icons';
import Settings from './tabs/Settings';
import Modal from './screens/Modal';
import Drawer from './components/Drawer';

// Stack navigation for Settings and Profile screens
const SettingsTab = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: null,             // Hide the header
      headerBackTitle: 'Back',  // Title back button Back when we navigate to Profile from Settings
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      // Customize header's title with user name passed to navigate()
      // You can pass any props you'd like. For instance: navigate('Profile', { user: 'Tom' }
      title: `${navigation.state.params.user}'s Profile`,
    })
  },
}, {
  headerMode: 'screen',
});

// Tab navigation for Home and Settings screens
const TabNavigation = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Settings: {
    screen: SettingsTab,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

// Wrap tab navigation into drawer navigation
const TabsWithDrawerNavigation = DrawerNavigator({
  Tabs: {
    screen: TabNavigation,
  }
}, {
  // Register custom drawer component
  contentComponent: props => <Drawer {...props} />
});

// And lastly stack together drawer with tabs and modal navigation
// because we want to be able to call Modal screen from any other screen
const App = StackNavigator({
  TabsWithDrawer: {
    screen: TabsWithDrawerNavigation,
  },
  Modal: {
    screen: Modal,
  },
}, {
  // In modal mode screen slides up from the bottom
  mode: 'modal',
  // No headers for modals. Otherwise we'd have two headers on the screen, one for stack, one for modal.
  headerMode: 'none',
});


export default App;

*/
