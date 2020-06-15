import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const Sentence = ({ sentence }) => {

  const converStrToNum = sentence => sentence.split(' ').map(w => w && w.length).join(' ');

  return (
    <>
      <View style={{ marginTop: 30 }}><Text style={styles.titleSentence} >Conversion</Text></View>
      <View style={styles.sky}>
        <Text style={styles.titleSentence}>{converStrToNum(sentence)}</Text>
      </View>
    </>
  );
}

const App = () => {

  const [sentence, setSentence] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.blue}>
        <TextInput
          onChangeText={sentence => setSentence(sentence)}
          defaultValue={sentence}
          style={styles.titleInput}
        />
      </View>
      {sentence != '' && <Sentence sentence={sentence} />}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 10
  },
  blue: {
    height: 15,
    backgroundColor: 'powderblue'
  },
  sky: {
    height: 25,
    backgroundColor: 'skyblue',
    marginTop: 10, padding: 3
  },
  titleSentence: {
    fontSize: 20
  },
  titleInput: {
    fontSize: 13
  }
});