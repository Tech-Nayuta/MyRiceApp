import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native' 
import CircleButton from '../elements/CircleButton';
// お米のiconを導入するための記述
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class MemoCreateScreen extends React.Component{
  render(){
    return(
      <View style={styles.container} behavior="height" keyboardVerticalOffset="50" >
        <Text style={styles.topText} >あなたにぴったりな</Text>
        <Text style={styles.rowText} >お米を診断します！</Text>
        <Icon style={styles.riceIcon}name="rice" color="#FFC776" />
        <CircleButton style={styles.button}　onPress={() => {}}/>
        <Image style={styles.riceList}source={require('../../assets/rice_list.jpg')} />
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
  topText: {
    marginTop: 100,
    fontSize: 24,
    alignSelf: 'center',
  },
  rowText: {
    marginTop: 10,
    fontSize: 24,
    alignSelf: 'center',
  },
  riceIcon: {
    fontSize: 80,
    alignSelf: 'center',
    marginTop: 60,
  },
  button:{
    backgroundColor: '#ddd',
    width: 300,
    height: 60,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 200,
    borderRadius: 24,
    shadowColor:'#000',
    shadowOffset: {width:0,height:3},
    shadowOpacity: 0.3,
    shadowRadius: 3,
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