import React from 'react'

import { View, StyleSheet, Text, ScrollView, TouchableHighlight } from 'react-native' 
import CircleButton from '../elements/CircleButton';
// お米のiconを導入するための記述
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ResultList from '../components/ResultList';


class DiagnosisResultScreen extends React.Component{


  handlePress(){
    this.props.navigation.navigate('Home');
  }


  render(){
    const {params} = this.props.navigation.state;
    console.log(params.results);
    return(
      <ScrollView style={styles.container} behavior="height" keyboardVerticalOffset="50" >
        <View style={styles.textContainer}>
          <Text style={styles.topText} >診断結果</Text>
          <Text style={styles.rowText} >あなたにぴったりな</Text>
          <Text style={styles.rowText} >お米はこれです！</Text>
        </View>
      
        <ResultList resultList={params.results}/>

        <TouchableHighlight onPress={this.handlePress.bind(this)} style={styles.button} underlayColor="transparent">
            <Text style={styles.buttonText}>もう一度診断する！</Text>
        </TouchableHighlight>
      </ScrollView>
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
    top: 40,
    width: 300,
    height: 140,
    backgroundColor: '#FFC776',
    alignSelf: 'center',
    borderRadius: 30,
  },
  topText: {
    marginTop: 20,
    marginBottom: 15,
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
  button:{
    backgroundColor: '#98A51C',
    width: 300,
    height: 60,
    alignSelf: 'center',
    borderRadius: 24,
    shadowColor:'#000',
    shadowOffset: {width:0,height:3},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginBottom: 20,
  },
  buttonText: {
    paddingTop: 20,
    alignSelf: 'center',
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DiagnosisResultScreen;