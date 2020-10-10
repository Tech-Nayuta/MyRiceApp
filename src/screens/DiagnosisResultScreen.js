import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native' 
import CircleButton from '../elements/CircleButton';
// お米のiconを導入するための記述
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class DiagnosisResultScreen extends React.Component{

  handlePress(){
    this.props.navigation.navigate('Home');
  }

  render(){
    return(
      <View style={styles.container} behavior="height" keyboardVerticalOffset="50" >
        <View style={styles.textContainer}>
          <Text style={styles.topText} >診断結果</Text>
          <Text style={styles.rowText} >あなたにぴったりな</Text>
          <Text style={styles.rowText} >お米はこれです！</Text>
        </View>
        <TouchableHighlight onPress={this.handlePress.bind(this)} style={styles.button} underlayColor="transparent">
            <Text style={styles.buttonText}>もう一度診断する！</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#fff',
  },
  textContainer: {
    position: 'absolute',
    top: 60,
    width: 300,
    height: 170,
    backgroundColor: '#FFC776',
    alignSelf: 'center',
    borderRadius: 45,
  },
  topText: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 24,
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  rowText: {
    marginTop: 10,
    fontSize: 20,
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  riceIcon: {
    fontSize: 80,
    alignSelf: 'center',
    marginTop: 60,
    position: 'absolute',
    bottom: 300,
  },
  button:{
    backgroundColor: '#98A51C',
    width: 300,
    height: 60,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 70,
    borderRadius: 24,
    shadowColor:'#000',
    shadowOffset: {width:0,height:3},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DiagnosisResultScreen;