/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

function App() {
  // const [sum, setSum] = useState(0);
  const [count, setCount] = useState(0);
  const onClickHandler = () => {
    setCount(count + 1);
    // setSum(sum + 5);
  };

  return (
    // <View style={{backgroundColor: 'red'}}> ---inline
    // <View style={[styles.body, styles.bgred]}> ---multiple
    // <View style={[styles.body, {backgroundColor: 'red'}]}>
    <View style={styles.body}>
      <Text style={styles.title1}>{count * 5}</Text>
      <View style={styles.button}>
        <Button title="ADD" onPress={onClickHandler} />
      </View>
      <Text style={styles.title1}>You clicked {count} times.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    // flex: 1,
    height: '50%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10,
    borderColor: 'pink',
    borderRadius: 15,
    // margin: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  bgred: {
    backgroundColor: 'red',
  },
  title1: {
    backgroundColor: '#fff',
    color: 'black',
    // fontWeight: 'bold',
    // width: '100%',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 20,
    padding: 10,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  button: {
    width: 70,
  },
});

export default App;
