import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import DiagnosticScreen from './src/screens/DiagnosticScreen';
import DiagnosisResultScreen from './src/screens/DiagnosisResultScreen';

const App = createStackNavigator({
  Home:      { screen: HomeScreen },
  Dignostic: { screen: DiagnosticScreen },
  Result:    { screen: DiagnosisResultScreen },  
}, {
  defaultNavigationOptions: {
    headerBackTitle: "",
    headerTitle: 'My Rice',
    headerTintColor: '#fff',
    headerTitleStyle:{
      color: '#fff',
    },
    headerStyle:{
      backgroundColor: "#98A51C",
    },
  }
});
 
export default createAppContainer(App);

