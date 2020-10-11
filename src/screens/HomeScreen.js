import React from 'react'
import { View, StyleSheet, Text, Image, TouchableHighlight, Animated } from 'react-native' 
// お米のiconを導入するための記述
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class MemoCreateScreen extends React.Component{

  handlePress(){
    this.props.navigation.navigate('Diagnostic');
  }


  constructor() {
    super();
    this.RotateValueHolder = new Animated.Value(0);
  }
  componentDidMount() {
    this.StartImageRotateFunction();
  }
  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false, // Add this line
    }).start(() => this.StartImageRotateFunction());
  }
  
  render(){
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return(
    <View style={styles.container} behavior="height" keyboardVerticalOffset="40" >
        <View style={styles.textContainer}>
          <Text style={styles.topText} >あなたにぴったりな</Text>
          <Text style={styles.rowText} >お米を診断します！</Text>
        </View>
          <Animated.Image
            style={{width: 130,
            height: 130,
            alignSelf: 'center',
            position: 'absolute',
            bottom: 195,
            transform: [{ rotate: RotateData }]}}
            source={require('../../assets/rice_icon.png')}
            /> 
          <TouchableHighlight onPress={this.handlePress.bind(this)} style={styles.button} underlayColor="transparent">
            <Text style={styles.buttonText}>診断を開始する！</Text>
          </TouchableHighlight>
         <Animated.Image style={styles.riceList} source={require('../../assets/rice_list.jpg')} />
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
    top: 45,
    width: 300,
    height: 150,
    backgroundColor: '#F8C758',
    alignSelf: 'center',
    borderRadius: 45,
  },
  topText: {
    marginTop: 50,
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
    width: 180,
    height: 170,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 100,
  },
  button:{
    backgroundColor: '#98A51C',
    width: 300,
    height: 60,
    alignSelf: 'center',
    bottom: 110,
    borderRadius: 50,
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
    bottom: 5,
    alignSelf: 'center',
  },
});

export default MemoCreateScreen;