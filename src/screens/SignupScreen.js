import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight, TextInput} from 'react-native' 
import firebase from 'firebase'
import {NavigationActions, StackActions} from 'react-navigation'

class SignupScreen extends React.Component{
  state = {
    email: '',
    password: '',
  }

  handleSubmit(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(({ user }) => {
        console.log('success!', user);
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home'}),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      }) 
      .catch((error) => {
        console.log(error);
      });
    //もしくは
    // .then((result) => {
    //   console.log('success!', result.user);
    // })
    
    //signup
  }
  
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>メンバー登録</Text>
        <TextInput 
          style={styles.input} 
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text});}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"/>
       
        <TextInput style={styles.input} 
                   value={this.state.password}
                   onChangeText={(text) => { this.setState({ password: text});}}
                   autoCapitalize="none"
                   autoCorrect={false}
                   placeholder="Password"
                   secureTextEntry/>

        <TouchableHighlight underlayColor="#c70f66" style={styles.button} onPress={this.handleSubmit.bind(this)} >
        {/* <TouchableHighlight underlayColor="#c70f66" style={styles.button} onPress={() => {this.props.navigation.navigate('Home');}} underlayColor="transparent"> */}
          <Text style={styles.buttonTitle}>送信する</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flex: 1,
    padding: 24,
    width: '100%',
  },
  input:{
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center', //左右真ん中
    marginBottom: 24,
  },
  button:{
    backgroundColor: '#e31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle:{
    color: "#fff",
    fontSize: 18,
  },


});

export default SignupScreen;