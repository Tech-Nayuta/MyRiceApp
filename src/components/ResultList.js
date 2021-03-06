import React from 'react'
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

class ResultList extends React.Component{

  renderRice(riceData){ 

    console.log("riceData\n" + riceData.url);
    

    return(
       <View style={styles.riceContents}>
         <Text style={styles.riceName}>{riceData.name}</Text>
         <Image style={styles.image} source={{ url: riceData.url }}/>
          {/* <Text style={styles.memoDate}>{dateString(item.createdOn)}</Text> */}
       </View>
    )
  }

  render(){
    // console.log(this.props.resultList);

    const list = [];
    this.props.resultList.forEach((riceData) => {
      list.push(this.renderRice(riceData));
    }); 

    // return(
    // // <View style={styles.resultList}>
    // //   {list}
    // // </View>
    // );

    console.log(this.props.resultList);
    return(
      <View style={styles.resultList}>
        {list}
        {/* <FlatList data={this.props.resultList} renderItem={this.renderRice.bind(this)}/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resultList:{
    // backgroundColor: '#eee',
    width: '100%',
    flex:1,
    marginTop: 100,
    marginBottom: 30,
  },
  riceContents:{
    // height: 40,
    padding: 16,
  },
  riceName:{
    fontSize: 20,
    // marginLeft: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  image:{
    marginTop: 20,
    alignSelf: 'center',
    height: 200,
    width: 200,
    marginBottom: 30,
  }
});

export default ResultList;