import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
}, 'FontAwsome');

class CircleButton extends React.Component{
  state = {
    fontLoaded: false,
  }

  async componentDidMount(){
    try {
      await Font.loadAsync({
        FontAwsome: fontAwsome,
      });  //async, await（awaitのロードが終わるので次の処理に行かないように設定する。）
      this.setState({fontLoaded: true});  
    } catch (error) {
      
    }
  }
s
  render(){
    const {style, color, name, onPress} = this.props; //引数としてスタイルを取り出せる
    let bgColor = '#e31676';
    let textColor = '#fff';

    if(color === 'white'){
      bgColor = '#fff';
      textColor = '#e31676';
    }


    return(
      <TouchableHighlight style={[styles.container, style]} onPress={this.props.onPress} underlayColor="transparent">
        <View style={[styles.circleButton, {backgroundColor: bgColor}]}>
        {
          this.state.fontLoaded?(
            <CustomIcon name={name} style={[styles.circleButtonTitle, {color: textColor}]}/>
          ): null
        }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: 48,
    height: 48,
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  circleButton:{

    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'#000',
    shadowOffset: {width:0,height:3},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  circleButtonTitle:{
    fontFamily: 'FontAwsome',
    fontSize: 24,
    lineHeight: 32,
  },
});

export default CircleButton;