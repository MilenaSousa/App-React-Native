import React, { Component } from 'react';
import PropTypes from 'prop-types';

import{
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Post extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>{this.props.title}</Text>
        <Text style={styles.autora}>{this.props.name}</Text>
        <Text style={styles.texto}>{this.props.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 5,
  },

  autora: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingTop: 3,
    paddingBottom: 12,
    marginBottom: 10,
    fontSize: 13,
    color: '#999999',
  },

  titulo :{
    color: '#333',
    fontWeight: 'bold',
  },

  texto: {
    lineHeight: 25,
    color: '#666666',
  }

});
