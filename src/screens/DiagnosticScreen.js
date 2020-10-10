import React from 'react'
import { StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native' 

import CircleButton from '../elements/CircleButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const dateString = (date) => {
//   //Timestamp型からDate型に変換（.toDate）し、文字列に
//   if(date == null){return '';}

//   const str = date.toDate().toISOString();
//   return str.split('T')[0];
// 



let questions = ["10日のお昼ご飯は？","11日のお昼ご飯は？","12日のお昼ご飯は？","13日のお昼ご飯は？","14日のお昼ご飯は？"];

class DiagnosticScreen extends React.Component{

  
  async componentDidMount(){
    const {params} = this.props.navigation.state;
    if(params != null){
      await this.setState({questionId: params.questionId});
      await this.setState({selections: params.selections});
      // console.log(params.selections);
      // console.log(this.state.anwerSelections); 
    }
  }
  
  state = {
    questionId: 0,
    selections: [],
    isPushed: false,
  }



  // returnMemo(memo){
  //   this.setState({memo})
  // }

  handleSubmit(selection){
    if(this.state.isPushed == true){return}
    this.state.selections.push(selection);
    const selections = this.state.selections;

    const nextQuestionId = this.state.questionId + 1;
    
    this.setState({isPushed: true});
    if(nextQuestionId > questions.length - 1){
      console.log(selections);
      //rails リクエスト処理を行う


      // (((rails--------------------------------------------------------------------------------------
      // fetch(`https://zone-web.herokuapp.com/api/login.json?selections=${this.state.selections}`)
      //   .then((response) => response.json())
      //   .then((jsonData) => {
      //     this.setState({ loading: false })
      //     if (jsonData['api_token']) {
      //       this.props.navigation.navigate('main')
      //     }
      //     else {
      //       this.setState({ failed: true })
      //     }
      //   })
      //   .catch((error) => console.error(error));
      
      this.props.navigation.navigate('ok',{});
    }
    else{
      this.props.navigation.push('Diagnostic', {
        questionId: nextQuestionId,
        selections: selections,
      })
    }
  }

  render(){
    // const {memo} = this.state;
    // if(Object.keys(memo).length == 0){return null

    switch(this.state.questionId){
      case 0:
        return(
          <View style={styles.container}>
            <View style={styles.question}>
              <View style={styles.questionContents}>
                  <Text style={styles.question}>{questions[this.state.questionId]}</Text>
              </View>
            </View>
            <View style={styles.answerContent}>
              <CircleButton name="pencil" style={styles.submitButton1} color="white" onPress={this.handleSubmit.bind(this,1)}/>
              <CircleButton name="pencil" style={styles.submitButton2} color="white" onPress={this.handleSubmit.bind(this,2)}/>
              <CircleButton name="pencil" style={styles.submitButton3} color="white" onPress={this.handleSubmit.bind(this,3)}/>
              <CircleButton name="pencil" style={styles.submitButton4} color="white" onPress={this.handleSubmit.bind(this,4)}/>
              {/* <CircleButton name="pencil" style={styles.submitButton5} color="white" onPress={() => {}}/> */}
            </View>
              {/* <Image style={styles.tinyLogo} source={require()} /> */}
            <View style={styles.riceImages}>
              <Image style={styles.rice0} source={require('../../assets/ine/0.png')}/> 
            </View>
          </View>
        );
      case 1:
        return(
          <View style={styles.container}>
            <View style={styles.question}>
              <View style={styles.questionContents}>
                  <Text style={styles.question}>{questions[this.state.questionId]}</Text>
              </View>
            </View>
            <View style={styles.answerContent}>
             <CircleButton name="pencil" style={styles.submitButton1} color="white" onPress={this.handleSubmit.bind(this,1)}/>
              <CircleButton name="pencil" style={styles.submitButton2} color="white" onPress={this.handleSubmit.bind(this,2)}/>
              <CircleButton name="pencil" style={styles.submitButton3} color="white" onPress={this.handleSubmit.bind(this,3)}/>
              <CircleButton name="pencil" style={styles.submitButton4} color="white" onPress={this.handleSubmit.bind(this,4)}/>
              {/* <CircleButton name="pencil" style={styles.submitButton5} color="white" onPress={() => {}}/> */}
            </View>
              {/* <Image style={styles.tinyLogo} source={require()} /> */}
            <View style={styles.riceImages}>
              <Image style={styles.rice0} source={require('../../assets/ine/0.png')}/> 
              <Image style={styles.rice1} source={require('../../assets/ine/1.png')}/> 
            </View>
          </View>
        );
      case 2:
        return(
          <View style={styles.container}>
            <View style={styles.question}>
              <View style={styles.questionContents}>
                  <Text style={styles.question}>{questions[this.state.questionId]}</Text>
              </View>
            </View>
            <View style={styles.answerContent}>
              <CircleButton name="pencil" style={styles.submitButton1} color="white" onPress={this.handleSubmit.bind(this,1)}/>
              <CircleButton name="pencil" style={styles.submitButton2} color="white" onPress={this.handleSubmit.bind(this,2)}/>
              <CircleButton name="pencil" style={styles.submitButton3} color="white" onPress={this.handleSubmit.bind(this,3)}/>
              <CircleButton name="pencil" style={styles.submitButton4} color="white" onPress={this.handleSubmit.bind(this,4)}/>
              {/* <CircleButton name="pencil" style={styles.submitButton5} color="white" onPress={() => {}}/> */}
            </View>
              {/* <Image style={styles.tinyLogo} source={require()} /> */}
            <View style={styles.riceImages}>
              <Image style={styles.rice0} source={require('../../assets/ine/0.png')}/> 
              <Image style={styles.rice1} source={require('../../assets/ine/1.png')}/> 
              <Image style={styles.rice2} source={require('../../assets/ine/2.png')}/> 
            </View>
          </View>
        );
      case 3:
        return(
          <View style={styles.container}>
            <View style={styles.question}>
              <View style={styles.questionContents}>
                  <Text style={styles.question}>{questions[this.state.questionId]}</Text>
              </View>
            </View>
            <View style={styles.answerContent}>
              <CircleButton name="pencil" style={styles.submitButton1} color="white" onPress={this.handleSubmit.bind(this,1)}/>
              <CircleButton name="pencil" style={styles.submitButton2} color="white" onPress={this.handleSubmit.bind(this,2)}/>
              <CircleButton name="pencil" style={styles.submitButton3} color="white" onPress={this.handleSubmit.bind(this,3)}/>
              <CircleButton name="pencil" style={styles.submitButton4} color="white" onPress={this.handleSubmit.bind(this,4)}/>
              {/* <CircleButton name="pencil" style={styles.submitButton5} color="white" onPress={() => {}}/> */}
            </View>
              {/* <Image style={styles.tinyLogo} source={require()} /> */}
            <View style={styles.riceImages}>
              <Image style={styles.rice0} source={require('../../assets/ine/0.png')}/> 
              <Image style={styles.rice1} source={require('../../assets/ine/1.png')}/> 
              <Image style={styles.rice2} source={require('../../assets/ine/2.png')}/> 
              <Image style={styles.rice3} source={require('../../assets/ine/3.png')}/> 
            </View>
          </View>
        );
      case 4:
        return(
          <View style={styles.container}>
            <View style={styles.question}>
              <View style={styles.questionContents}>
                  <Text style={styles.question}>{questions[this.state.questionId]}</Text>
              </View>
            </View>
            <View style={styles.answerContent}>
              <CircleButton name="pencil" style={styles.submitButton1} color="white" onPress={this.handleSubmit.bind(this,1)}/>
              <CircleButton name="pencil" style={styles.submitButton2} color="white" onPress={this.handleSubmit.bind(this,2)}/>
              <CircleButton name="pencil" style={styles.submitButton3} color="white" onPress={this.handleSubmit.bind(this,3)}/>
              <CircleButton name="pencil" style={styles.submitButton4} color="white" onPress={this.handleSubmit.bind(this,4)}/>
              {/* <CircleButton name="pencil" style={styles.submitButton4} color="white" onPress={this.handleSubmit.bind(this)}/> */}
              {/* <CircleButton name="pencil" style={styles.submitButton5} color="white" onPress={() => {}}/> */}
            </View>
              {/* <Image style={styles.tinyLogo} source={require()} /> */}
            <View style={styles.riceImages}>
              <Image style={styles.rice0} source={require('../../assets/ine/0.png')}/> 
              <Image style={styles.rice1} source={require('../../assets/ine/1.png')}/> 
              <Image style={styles.rice2} source={require('../../assets/ine/2.png')}/> 
              <Image style={styles.rice3} source={require('../../assets/ine/3.png')}/> 
              <Image style={styles.rice4} source={require('../../assets/ine/4.png')}/> 
            </View>
          </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
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
  answerContent:{
    flex: 1,
    width: '100%',
  },
  answerContent:{
    flex: 1,
  },
  submitButton1:{
    top: 50,
    left: 80,
  },
  submitButton2:{
    top:  150,
    left: 80,
  },
  submitButton3:{
    top: 50,
    right: 80,
  },
  submitButton4:{
    top:  150,
    right: 80,
  },
  riceImages:{
    display: 'flex',
    flexDirection: 'row',
  },
  rice0:{
    marginTop: 50,
    width: 100,
    height: 60,
  },
  rice1:{
    width: 60,
    height: 110,
  },
  rice2:{
    width: 60,
    height: 110,
  },
  rice3:{
    marginLeft: 5,
    width: 60,
    height: 110,
    marginBottom: 10,
  },
  rice4:{
    marginLeft: 10,
    width: 60,
    height: 110,
  },
  rice5:{
    width: 60,
    height: 110,
  },




  // editButton:{ //現在使用していない
  //   top: 75,
  // },
});

export default DiagnosticScreen;