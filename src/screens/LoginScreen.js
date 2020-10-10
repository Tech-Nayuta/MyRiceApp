import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight, TextInput, TouchableOpacity, ImageBackground } from 'react-native' 
import firebase from 'firebase';
import {NavigationActions, StackActions} from 'react-navigation'
import * as SecureStore from 'expo-secure-store';
import Loading from '../elements/Loading';
// import Expo from 'expo';

const image = { uri: "https://i.pinimg.com/originals/a3/97/73/a39773f13b7e3e4ac7c72ba390f7fd6a.jpg" };

class LoginScreen extends React.Component{
  state = {
    email: '',
    password: '',
    isLoading: true,
    errorMessage: '',
  }

  async componentDidMount(){
    const email = await SecureStore.getItemAsync('email')
    const password = await SecureStore.getItemAsync('password');
    // const password = null
    
    if(email == null || password == null){
      this.setState({isLoading: false});
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(()=>{
        this.setState({ isLoading: false});
        this.navigateToHome();
      })
      .catch(() => {
        console.log("error");
        this.setState({ isLoading: false});
      });
  }

  navigateToHome(){
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'}),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  handleSubmit(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        //情報をデバイスに保存
        SecureStore.setItemAsync('email', this.state.email);
        SecureStore.setItemAsync('password', this.state.password);
        this.navigateToHome();
      })
      .catch((error) => {
        this.setState({errorMessage: "ログインできませんでした"})
        console.log('error!',error);
      }); 
  }

  handlePress(){
    this.props.navigation.navigate('Signup');
  }

  //bind(this)はよくわからん（とりあえずつける）
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Loading text="ログイン中" isLoading={this.state.isLoading} style={styles.loading}/>
          <Text style={styles.title}>Login</Text>
          <TextInput style={styles.input} 
                    value={this.state.email} 
                    onChangeText={(text) => {this.setState({email: text});}}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email Address"
                    /> 
          <TextInput style={styles.input} 
                    value={this.state.password}
                    onChangeText={(text) => {this.setState({password: text});}}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    secureTextEntry
                    /> 

          <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)}>
            <Text style={styles.buttonTitle}>Login</Text>
          </TouchableHighlight>
          <TouchableOpacity style={styles.signup} onPress={this.handlePress.bind(this)}>
            <Text style={styles.signupText}>メンバー登録する</Text>
          </TouchableOpacity>
          <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
  },
  image: {
    flex: 1,
    padding: 24,
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
    color: '#fff',
    marginBottom: 24,
    fontWeight: 'bold',
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
  errorMessage:{
    marginTop: 16,
    fontSize: 18,
    alignSelf: "center",
    color: "#dd0000"
  },
  signup:{
    marginTop: 16,
    alignSelf: 'center',
  },
  signupText:{
    fontSize: 16,
    color: '#fff',
  }
});

export default LoginScreen;