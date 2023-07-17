/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

import {Tooltip} from 'react-native-paper';

function App() {
  const [name, setName] = useState('Kris');
  const [session, setSession] = useState({number: 0, message: 'session0'});
  const [current, setCurrent] = useState(true);

  const onClickHandler = () => {
    setName(name === 'Kris' ? 'Racheal' : 'Kris');
    setSession({
      number: session.number + 1,
      message: `session${session.number + 1}`,
    });
    setCurrent(!current);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.title1}>Programming with {name}.</Text>
      <Text style={styles.title1}>
        The session number is {session.number} and message is {session.message}.
      </Text>
      <Text style={styles.title1}>
        {current ? 'current session' : 'next session'}
      </Text>
      <Tooltip title="change name">
        {/* <Button
          title={'YOUTUBE CHANNEL'}
          onPress={() => {
            Linking.openURL('https://www.youtube.com/');
          }}
        /> */}
        <Button title="update state" onPress={onClickHandler} />
      </Tooltip>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    backgroundColor: '#fff',
    color: 'lightblue',
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
