import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native';

import Post from 'components/Post';
import Header from 'components/Header';


export default class App extends Component {

  state = {
    itens: [
      {id: 0, titulo: 'Aprendendo React Native', autora: 'Milena Sousa', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl leo, ornare et est in, dignissim tristique nunc. Nullam viverra lectus non vehicula tristique.'},
      {id: 1, titulo: 'Aprendendo React Native', autora: 'Milena Sousa', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl leo, ornare et est in, dignissim tristique nunc. Nullam viverra lectus non vehicula tristique.'},
      {id: 2, titulo: 'Aprendendo React Native', autora: 'Milena Sousa', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl leo, ornare et est in, dignissim tristique nunc. Nullam viverra lectus non vehicula tristique.'}
    ]
  }

  render() {
    return (
      <View style={styles.container}>

          <View style={styles.header}>
            <Header/>
          </View>

      <ScrollView >
          {this.state.itens.map(item => (
            <Post
            key={item.id}
            title={item.titulo}
            name={item.autora}
            content={item.texto}
            />
          ) )}

          {this.state.itens.map(item => (
            <Post
            key={item.id}
            title={item.titulo}
            name={item.autora}
            content={item.texto}
            />
          ) )}
      </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EE7777',
  },

  header: {
    padding: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginBottom: 10,
  },

});
