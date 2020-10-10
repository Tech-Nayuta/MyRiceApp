import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase'
import { NavigationActions } from 'react-navigation';
// this.props.navigation.navigate('MemoEdit');

class MemoListScreen extends React.Component{
  state = {
    memoList: [],
  }

  componentDidMount() {
    console.log('didMount');
    const {currentUser} = firebase.auth();
    const db = firebase.firestore();
    firebase.firestore().collection(`users/${currentUser.uid}/memos`)
      .onSnapshot((snapshot) => {
        const memoList = [];
        snapshot.forEach((doc) => {
          memoList.push({...doc.data(), key: doc.id});
        });
        this.setState({memoList});
        //this.setState({memoList: memoList});と同じ意味
      })
      /*
      .get()
      .then((snapShot) => {
        const memoList = [];
        snapShot.forEach((doc) => {
          memoList.push({...doc.data(), key: doc.id});
        });
        this.setState({memoList});
        //this.setState({memoList: memoList});と同じ意味
        console.log(snapShot);
      })
      .catch((error) => {
        console.log(error);
      })*/
  }

  handlePress(){
    // const {params} = this.props.navigation.state;
    this.props.navigation.navigate('MemoCreate');
  }
  
  render(){
    return(
      <View style={styles.container}>
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation}/>
        <CircleButton  name="plus" onPress={this.handlePress.bind(this)} />
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fffdf6',
  },
});

export default MemoListScreen;