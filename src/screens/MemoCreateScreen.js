import React from 'react'
import { StyleSheet, KeyboardAvoidingView, TextInput} from 'react-native' 
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';

class MemoCreateScreen extends React.Component{
  state = {
    body: '',
  }

  handlePress(){
    // const {params} = this.props.navigation.state;
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();

    db.collection(`users/${currentUser.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),  
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      this.props.navigation.goBack();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render(){
    return(
      <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset="50" >
        <TextInput style={styles.memoEditInput} 
                   multiline 
                   value = {this.state.body}
                   onChangeText={(text) => {this.setState({body: text});}}/>
        <CircleButton name="check" onPress={this.handlePress.bind(this)}/>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
  },
  memoEditInput:{
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoCreateScreen;