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

import ENV from './env.json'
import MemoCreateScreen from './src/screens/MemoCreateScreen';

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket:  ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
  appId: ENV.FIREBASE_APP_ID,
  measurementId: ENV.FIREBASE_MEASURE_ID,
};

if(firebase.apps.length == 0){ //initializeAppが複数回呼ばれるとエラーに
  firebase.initializeApp(firebaseConfig);
}

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

// // export default createAppContainer(App);
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Appbar/>
//       {/* <MemoListScreen/> */}
//       {/* <MemoDetailScreen/> */}
//       {/* <MemoEditScreen/> */}
//       {/* <LoginScreen/> */}
//       <SignupScreen/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fffdf6',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingTop:78,
//   },
// });

// export default App;
// export default createAppContainer(App);