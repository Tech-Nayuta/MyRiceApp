import React from 'react'
import { StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native' 

import CircleButton from '../elements/CircleButton';

// const dateString = (date) => {
//   //Timestamp型からDate型に変換（.toDate）し、文字列に
//   if(date == null){return '';}

//   const str = date.toDate().toISOString();
//   return str.split('T')[0];
// }

class DiagnosticScreen extends React.Component{
  
  componentDidMount(){
    // const {params} = this.props.navigation.state;
    // this.setState({memo: params.memo});
  }
  
  state = {
    memo: {},
  }

  // returnMemo(memo){
  //   this.setState({memo})
  // }

  handleSubmit(){
    console.log('screen');
    this.props.navigation.navigate('Diagnostic2');
  }

  render(){
    // const {memo} = this.state;
    // if(Object.keys(memo).length == 0){return null}

    return(
      <View style={styles.container}>
        <View style={styles.question}>
          <View style={styles.questionContents}>
              <Text style={styles.question}>今日の天気は？</Text>
          </View>
        </View>
        <View style={styles.memoContent}>
          <Text style={styles.memoBody}>
          </Text>
        </View>     
        {/* <TouchableHighlight style={styles.submit} onPress={this.handleSubmit.bind(this)}>
          <Text> 次へ </Text>
        </TouchableHighlight> */}
        <CircleButton name="pencil" style={styles.submitButton1} color="white" onPress={this.handleSubmit.bind(this)}/>
        <CircleButton name="pencil" style={styles.submitButton2} color="white" onPress={this.handleSubmit.bind(this)}/>
        <CircleButton name="pencil" style={styles.submitButton3} color="white" onPress={this.handleSubmit.bind(this)}/>
        <CircleButton name="pencil" style={styles.submitButton4} color="white" onPress={this.handleSubmit.bind(this)}/>
        {/* <CircleButton name="pencil" style={styles.submitButton5} color="white" onPress={() => {}}/> */}

        {/* <Image style={styles.tinyLogo} source={require()} /> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
  },
  questionContents:{
    height: 200,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  question:{
    fontSize: 30,
    fontWeight: 'bold',
  },  
  memoHeader:{
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderContents:{
  },
  memoHeaderTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate:{
    fontSize: 12,
    color: '#fff',
  },
  memoBody:{
    lineHeight: 20,
    fontSize: 15,
  },
  memoContent:{
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  submitButton1:{
    top: 250,
    left: 80,
  },
  submitButton2:{
    top:  350,
    left: 80,
  },
  submitButton3:{
    top: 250,
    right: 80,
  },
  submitButton4:{
    top:  350,
    right: 80,
  },


  // editButton:{ //現在使用していない
  //   top: 75,
  // },
});

export default DiagnosticScreen;