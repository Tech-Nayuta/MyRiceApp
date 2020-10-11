import React from 'react'
import { StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native' 

import CircleButton from '../elements/CircleButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loading from '../elements/Loading';

// const dateString = (date) => {
//   //Timestamp型からDate型に変換（.toDate）し、文字列に
//   if(date == null){return '';}

//   const str = date.toDate().toISOString();
//   return str.split('T')[0];
// 


// let questions = ["10日のお昼ご飯は？","11日のお昼ご飯は？","12日のお昼ご飯は？","13日のお昼ご飯は？","14日のお昼ご飯は？"];
let questions = ["３つの項目から選んでください","好きな固さはどれくらい？","粘りの強さはどれくらい？"]

class DiagnosticScreen extends React.Component{

  
  async componentDidMount(){
    const {params} = this.props.navigation.state;
    if(params != null){
      await this.setState({questionId: params.questionId});
      await this.setState({selections: params.selections});
      // console.log(params.selections);
      // console.log(this.state.anwerSelections); 
    }

    // fetch(`https://webapi.aitalk.jp/webapi/v2/ttsget.php/BODY?username=spajam2020&password=Jh7pLYfp&speaker_name=nozomi&text=${questions[this.state.questionId]}`)
    //   .then((response) => console.log(response))
    //   // .then((jsonData) => {
    //   //   this.setState({ loading: false })
    //   //   if (jsonData['api_token']) {
    //   //     this.props.navigation.navigate('main')
    //   //   }
    //   //   else {
    //   //     this.setState({ failed: true })
    //   //   }
    //   // })
    //   .catch((error) => console.error(error));
  }
  
  state = {
    questionId: 0,
    selections: [],
    isLoading: false,
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
      this.setState({isLoading: true});

      //rails リクエスト処理を行う

      // // (((rails--------------------------------------------------------------------------------------
      // https://5f7ec8d7194e46c4be7084f6ddaccdbb.vfs.cloud9.ap-northeast-1.amazonaws.com/
      return fetch(`https://whispering-coast-00606.herokuapp.com/rices?selections=${this.state.selections}`)

      

        // https://whispering-coast-00606.herokuapp.com/rices
        // .then((response) => {
        //   return response.json();
        // })
           
        // return fetch('https://whispering-coast-00606.herokuapp.com/rices',{
        //   method: 'POST',
        //   headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ selections: this.state.selections})
        // })

        
        // fetch('https://whispering-coast-00606.herokuapp.com/rices', {
        //   method: 'POST',
        //   headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     selections: selections,
        //   })
        // })
  
          .then((response) => {
             return response.json();
          })
        .then((jsonData) => {
          this.setState({isLoading: false});
          this.props.navigation.navigate('Result',{results: jsonData});
          // this.setState({ loading: false })
          // if (jsonData['api_token']) {
          //   this.props.navigation.navigate('main')
          // }
          // else {
          //   this.setState({ failed: true })
          // }
        })
        .catch((error) => {
          this.setState({isLoading: false});
          console.error(error)
        });
      
      // this.props.navigation.navigate('ok',{});
    }
    else{
      console.log("ok");
      this.props.navigation.push('Diagnostic', {
        questionId: nextQuestionId,
        selections: selections,
      })
    }
  }

  render(){
    // const {memo} = this.state;
    // if(Object.keys(memo).length == 0){return null

  //  fetch(`http://webapi.aitalk.jp/webapi/v2/ttsget.php?username=spajam2020&password=Jh7pLYfp&speaker_name=nozomi&text=${questions[this.state.questionId]}`)
  //       .then((response) => console.log(response))
  //       // .then((jsonData) => {
  //       //   this.setState({ loading: false })
  //       //   if (jsonData['api_token']) {
  //       //     this.props.navigation.navigate('main')
  //       //   }
  //       //   else {
  //       //     this.setState({ failed: true })
  //       //   }
  //       // })
  //       .catch((error) => console.error(error));

    switch(this.state.questionId){
      case 0:
        return(
          <View style={styles.container}>
            <Loading text="診断中..." isLoading={this.state.isLoading} style={styles.loading}/>
            <View style={styles.question}>
              <View style={styles.questionContents}>
                  <Text style={styles.question}>{questions[this.state.questionId]}</Text>
              </View>
            </View>
            <View style={styles.answerContent}>
              <TouchableHighlight style={styles.submitButton} onPress={this.handleSubmit.bind(this,1)} >
                <Text style={styles.submitButtonText}>手軽に食べたい</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.submitButton} onPress={this.handleSubmit.bind(this,2)}>
                <Text style={styles.submitButtonText}>普通に食べたい</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.submitButton} onPress={this.handleSubmit.bind(this,3)}>
                <Text style={styles.submitButtonText}>作り置きしたい</Text>
              </TouchableHighlight>
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
              <TouchableHighlight style={styles.submitButton} onPress={this.handleSubmit.bind(this,1)} >
                <Text style={styles.submitButtonText}>硬い</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.submitButton} onPress={this.handleSubmit.bind(this,2)}>
                <Text style={styles.submitButtonText}>普通</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.submitButton} onPress={this.handleSubmit.bind(this,3)}>
                <Text style={styles.submitButtonText}>柔らかい</Text>
              </TouchableHighlight>
            </View>
              {/* <Image style={styles.tinyLogo} source={require()} /> */}
            <View style={styles.riceImages}>
              <Image style={styles.rice0} source={require('../../assets/ine/0.png')}/> 
              <Image style={styles.rice1} source={require('../../assets/ine/2.png')}/> 
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
              <TouchableHighlight style={styles.submitButton} onPress={this.handleSubmit.bind(this,1)} >
                <Text style={styles.submitButtonText}>強い</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.submitButton} onPress={this.handleSubmit.bind(this,2)}>
                <Text style={styles.submitButtonText}>普通</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.submitButton} onPress={this.handleSubmit.bind(this,3)}>
                <Text style={styles.submitButtonText}>弱い</Text>
              </TouchableHighlight>
            </View>
              {/* <Image style={styles.tinyLogo} source={require()} /> */}
            <View style={styles.riceImages}>
              <Image style={styles.rice0} source={require('../../assets/ine/0.png')}/> 
              <Image style={styles.rice2} source={require('../../assets/ine/2.png')}/> 
              <Image style={styles.rice1} source={require('../../assets/ine/3.png')}/> 
              <Image style={styles.rice1} source={require('../../assets/ine/5.png')}/> 

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
 　submitButton:{
    width: 300,
    height: 60,
    backgroundColor: '#F8C758',
    alignSelf: 'center',
    borderRadius: 24,
    marginBottom: 40,
    shadowColor:'#000',
    shadowOffset: {width:0,height:3},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  submitButtonText: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 20,
  },
  riceImages:{
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 60,
    justifyContent: 'center',
  },
  rice0:{
    marginTop: 40,
    width: 100,
    height: 60,
  },
  rice1:{
    width: 80,
    height: 110,
  },
  rice2:{
    width: 100,
    height: 110,
  },
  // rice3:{
  //   marginLeft: 5,
  //   width: 60,
  //   height: 110,
  //   marginBottom: 10,
  // },
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