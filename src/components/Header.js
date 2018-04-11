import React, { Component } from 'react';

import{
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Header extends Component{

  render(){
    return(
      <View>
          <Text style={styles.font}>GoNative App</Text>
      </View>
    );
  }
}

const styles =  StyleSheet.create({
  font :{
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
