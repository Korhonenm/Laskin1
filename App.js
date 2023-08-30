import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [tulos, setTulos] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const initialFocus = useRef(null);

  const laske = input => {
    const [numero1, numero2] = [Number(input1), Number(input2)];

      switch (input) {
        case 'summa':
          setTulos (numero1 + numero2);
          break;
        case 'erotus':
          setTulos (numero1 - numero2);
          break;
      }
    setInput1('');
    setInput2('');
    initialFocus.current.focus();
  }

  return (
    <View style={styles.container}>
      <Text>Result: {tulos} </Text>
      <TextInput style={styles.input} ref={initialFocus}
        keyboardType="numeric" placeholder="numero 1"
        onChangeText={text => setInput1(text)}
        value={input1}>
      </TextInput>
      <TextInput style={styles.input}
        keyboardType="numeric" placeholder="numero 2"
        onChangeText={text => setInput2(text)}
        value={input2}>
      </TextInput>
      <View style={styles.buttons}>
        <View style={styles.buttonContainer}>
          <Button title='+' onPress={() => laske ('summa')}></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button title='-' onPress={() => laske ('erotus')}></Button>
        </View>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },

  input: {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1,
    padding: 5,
    margin: 5
  },

  buttons:{
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  
  buttonContainer:{
    width: '30%'
  }
});