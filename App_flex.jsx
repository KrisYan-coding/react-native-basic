/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

function App() {
  return (
    <View style={styles.view1}>
      <View style={{...styles.view2, ...styles.box1}}>
        <Text style={styles.title1}>1</Text>
      </View>
      <View style={{...styles.view2, ...styles.box2}}>
        <Text style={styles.title1}>2</Text>
      </View>
      <View style={{...styles.view2, ...styles.box3}}>
        <Text style={styles.title1}>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: 'lightblue',
    // width: 30, // default 100%
    // height: 200,
    flex: 1, // without flex or fixed sizes, height in View is large enough to accommodate its children
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', // default column
  },
  view2: {
    // height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    flex: 1, // flex will define how your items are going to 'fill' over the available space along your main axis
    backgroundColor: 'pink',
  },
  box2: {
    flex: 1, // flex will define how your items are going to 'fill' over the available space along your main axis
    backgroundColor: 'bisque',
  },
  box3: {
    flex: 1, // flex will define how your items are going to 'fill' over the available space along your main axis
    backgroundColor: 'lightgreen',
  },
  title1: {backgroundColor: '#000', color: '#fff', fontSize: 40},
});

export default App;
