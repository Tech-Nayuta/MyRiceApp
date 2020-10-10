import React from 'react'
import { StyleSheet, View, KeyboardAvoidingView, TextInput} from 'react-native' 
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase'

class MemoEditScreen extends React.Component{
  state = {
    body: '',
    key: '',
  }

  componentDidMount(){
    const {params} = this.props.navigation.state;
    console.log(params.memo);

    this.setState({
      body: params.memo.body, 
      key: params.memo.key
    })

  }

  handlePress() {
    const { currentUser } = firebase.auth();
    const newDate = firebase.firestore.Timestamp.now(); // ← 正しくはこうです
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
      .update({
        body: this.state.body,
        createdOn: newDate,
      })
      .then(() => {
        // console.log(this.state);
        const {navigation}  = this.props;
        navigation.state.params.memo.returnMemo({
          body: this.state.body,
          key: this.state.key,
          createdOn: newDate,
        })
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
      })
  }


  render(){
    return(
      <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset="50" >
        <TextInput style={styles.memoEditInput} 
                   value={this.state.body} 
                   onChangeText={(text) => { this.setState({body:text});}}
                   multiline />
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

export default MemoEditScreen;