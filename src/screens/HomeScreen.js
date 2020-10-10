import React from 'react'
import { View, StyleSheet, Text, Image, TouchableHighlight, Animated } from 'react-native' 
import CircleButton from '../elements/CircleButton';
// お米のiconを導入するための記述
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class MemoCreateScreen extends React.Component{
  render(){
    return(
      <View style={styles.container} behavior="height" keyboardVerticalOffset="50" >
        <View style={styles.textContainer}>
          <Text style={styles.topText} >あなたにぴったりな</Text>
          <Text style={styles.rowText} >お米を診断します！</Text>
        </View>
          <Icon style={styles.riceIcon} name="rice" color="#F8C758" />
          <TouchableHighlight onPress={this.fadeOut} style={styles.button} underlayColor="transparent">
            <Text style={styles.buttonText}>診断を開始する！</Text>
          </TouchableHighlight>
         <Image style={styles.riceList} source={require('../../assets/rice_list.jpg')} />
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
    top: 80,
    width: 300,
    height: 170,
    backgroundColor: '#FFC776',
    alignSelf: 'center',
    borderRadius: 45,
  },
  topText: {
    marginTop: 52,
    fontSize: 24,
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  rowText: {
    marginTop: 10,
    fontSize: 24,
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
    bottom: 190,
    borderRadius: 24,
    position: 'absolute',
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
  riceList: {
    width: 350,
    height: 100,
    position: 'absolute',
    bottom: 32,

    alignSelf: 'center',
  },
});

export default MemoCreateScreen;