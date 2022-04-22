import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Nota 1"
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Nota 2"
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Número de faltas"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Calcular</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.textResult}>Valor foi aprovado</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    padding: 30,
    backgroundColor: '#4287f5f5',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    fontSize: 20,
  },
  button: {
    margin: 20,
    padding: 20,
    backgroundColor: '#37474f4f',
  },
  textButton: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    alignSelf: 'center',
  },
  textResult: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
