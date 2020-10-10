import React, { memo } from 'react'
import { StyleSheet, View, Text} from 'react-native' 

import CircleButton from '../elements/CircleButton';

const dateString = (date) => {
  //Timestamp型からDate型に変換（.toDate）し、文字列に
  if(date == null){return '';}

  const str = date.toDate().toISOString();
  return str.split('T')[0];
}

class MemoDetailScreen extends React.Component{
  
  componentDidMount(){
    const {params} = this.props.navigation.state;
    this.setState({memo: params.memo});
  }
  
  state = {
    memo: {},
  }

  returnMemo(memo){
    this.setState({memo})
  }

  render(){
    const {memo} = this.state;
    if(Object.keys(memo).length == 0){return null}

    return(
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View style={styles.memoHeaderContents}>
               <Text style={styles.memoHeaderTitle}>{memo.body.substring(0,10)}</Text>
              <Text style={styles.memoHeaderDate}>{dateString(memo.createdOn)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text style={styles.memoBody}>
            {memo.body}
          </Text>
        </View>
        <CircleButton name="pencil" style={styles.editButton} color="white" onPress={() => {this.props.navigation.navigate('MemoEdit', {memo: {...memo, returnMemo: this.returnMemo.bind(this)}});}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
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
  editButton:{ //現在使用していない
    top: 75,
  },
});

export default MemoDetailScreen;