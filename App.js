import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import BodyText from './src/elements/BodyText';

// import MemoDetailScreen from './src/screens/MemoDetailScreen';
// import MemoEditScreen from './src/screens/MemoEditScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import SignupScreen from './src/screens/SignupScreen';
 


// import MemoCreateScreen from './src/screens/MemoCreateScreen';
import HomeScreen from './src/screens/HomeScreen';



const App = createStackNavigator({
  // Login:      { screen: LoginScreen },
  Home: { screen: HomeScreen },
  // MemoCreate: { screen: MemoCreateScreen},
  // Signup:     { screen: SignupScreen },
  // Home:       { screen: MemoListScreen },
  // MemoDetail: { screen: MemoDetailScreen },
  // MemoEdit:   { screen: MemoEditScreen },
  
}, {
  defaultNavigationOptions: {
    headerBackTitle: "　",
    headerTitle: 'My Rice',
    headerTintColor: '#fff',
    headerTitleStyle:{
      color: '#fff',
    },
    headerStyle:{
      backgroundColor: "#734e30",
    },
  }
});
 
export default createAppContainer(App);

