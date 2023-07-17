/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

function App() {
  return (
    <View style={styles.screen}>
      <View style={{ ...styles.row, ...styles.row1 }}>
        <View style={{ ...styles.box, ...styles.box1 }}>
          <Text style={styles.title1}>1</Text>
        </View>
        <View style={{ ...styles.box, ...styles.box2 }}>
          <Text style={styles.title1}>2</Text>
        </View>
        <View style={{ ...styles.box, ...styles.box3 }}>
          <Text style={styles.title1}>3</Text>
        </View>
      </View>
      <View style={{ ...styles.row, ...styles.row2 }}>
        <View style={{ ...styles.box, ...styles.box4 }}>
          <Text style={styles.title1}>4</Text>
        </View>
      </View>
      <View style={{ ...styles.row, ...styles.row3 }}>
        <View style={{ ...styles.box, ...styles.box5 }}>
          <Text style={styles.title1}>5</Text>
        </View>
      </View>
      <View style={{ ...styles.row, ...styles.row4 }}>
        <View style={{ ...styles.box, ...styles.box6 }}>
          <Text style={styles.title1}>6</Text>
        </View>
        <View style={{ ...styles.box, ...styles.box7 }}>
          <Text style={styles.title1}>7</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'lightblue',
    flex: 1, // without flex or fixed sizes, height in View is large enough to accommodate its children
  },
  row1: {
    flexDirection: 'row',
  },
  row4: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  box1: {
    flex: 1, // flex will define how your items are going to 'fill' over the available space along your main axis
    backgroundColor: 'pink',
  },
  box2: {
    flex: 2, // flex will define how your items are going to 'fill' over the available space along your main axis
    backgroundColor: 'bisque',
  },
  box3: {
    flex: 3, // flex will define how your items are going to 'fill' over the available space along your main axis
    backgroundColor: 'lightgreen',
  },
  box4: {
    // flex: 6, // flex will define how your items are going to 'fill' over the available space along your main axis
    backgroundColor: 'lightcoral',
  },
  box5: {
    // flex: 6, // flex will define how your items are going to 'fill' over the available space along your main axis
    backgroundColor: 'lightseagreen',
  },
  box6: {
    flex: 1, // flex will define how your items are going to 'fill' over the available space along your main axis
    backgroundColor: 'linen',
  },
  box7: {
    flex: 1, // flex will define how your items are going to 'fill' over the available space along your main axis
    backgroundColor: 'lightslategrey',
  },
  title1: { backgroundColor: '#000', color: '#fff', fontSize: 20 },
});

export default App;
