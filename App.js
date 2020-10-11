
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import DiagnosticScreen from './src/screens/DiagnosticScreen';
import DiagnosisResultScreen from './src/screens/DiagnosisResultScreen';

const App = createStackNavigator({
  Home:      { screen: HomeScreen },
  Diagnostic: { screen: DiagnosticScreen },
  Result:    { screen: DiagnosisResultScreen },  
}, {
  defaultNavigationOptions: {
    headerBackTitle: "",
    //最後に実装する
    // headerLeft: () => null,
    headerTitle: 'My Rice',
    headerTintColor: '#fff',
    headerTitleStyle:{
      color: '#fff',
    },
    headerStyle:{
      backgroundColor: "#F8C758",
    },
  }
});
 
export default createAppContainer(App);