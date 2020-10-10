import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import BodyText from './src/elements/BodyText';
import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';

require("firebase/firestore");

import MemoCreateScreen from './src/screens/MemoCreateScreen';


const App = createStackNavigator({
  Login:      { screen: LoginScreen },
  MemoCreate: { screen: MemoCreateScreen},
  Signup:     { screen: SignupScreen },
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
}, {
  defaultNavigationOptions: {
    headerBackTitle: "　",
    headerTitle: 'Momot',
    headerTintColor: '#fff',
    headerTitleStyle:{
      color: '#fff',
    },
    headerStyle:{
      backgroundColor: "#265366",
    },
  }
});
 
export default createAppContainer(App);

