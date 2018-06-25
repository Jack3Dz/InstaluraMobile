/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

// type Props = {};
export default class App extends Component {
  render() {
    const fotos = [{id: 1, usuario: 'Daniela'}, 
    {id: 2, usuario: 'Jefferson'}, 
    {id: 3, usuario: 'Jeff'}];

    return (
      <FlatList style={styles.container} 
        keyExtractor={item => String(item.id)}
        data={fotos}
        renderItem={ ({item}) =>
          <View>
            <View style={styles.cabecalho}>
              <Image source={require('./resources/image/jeff.jpg')}
                style={styles.fotoDePerfil}/>
              <Text>{item.usuario}</Text>
            </View>
            <Image source={require('./resources/image/jeff.jpg')}
              style={styles.foto}/>
          </View>

        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },

  cabecalho: {
    margin: 10, 
    flexDirection: "row", 
    alignItems: "center"
  },

  fotoDePerfil: {
    marginRight: 10, 
    borderRadius: 20, 
    width: 40, 
    height: 40
  },

  foto: {
    width: width, 
    height: height
  },

});