import React from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const dateString = (date) => {
  //Timestamp型からDate型に変換（.toDate）し、文字列に
  if(date == null){return '';}
  
  const str = date.toDate().toISOString();
  return str.split('T')[0];
}

class MemoList extends React.Component{

  renderMemo({ item }){ //data.itemを取得できる
    return(
      <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail',{memo : item});}}>
       <View style={styles.memoListItem}>
         <Text style={styles.memoTitle}>{item.body.substring(0,10)}</Text>
          <Text style={styles.memoDate}>{dateString(item.createdOn)}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render(){
    // FlatListでいらなくなった
    // const list = [];
    // this.props.memoList.forEach((memo) => {
    //   list.push(this.renderMemo(memo));
    // }); 
    this.props.memoList;
    return(
    <View style={styles.memoList}>
      <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList:{
    // backgroundColor: '#eee',
    width: '100%',
    flex:1,
  },
  memoListItem:{
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle:{
    fontSize:18,
    marginBottom:4, 
  },
  memoDate:{
    fontSize:12,
    color:'#a2a2a2',
  },
});

export default MemoList;