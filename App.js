import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  AppState,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {nota1: 0, nota2: 0, faltas: 0, resultado: ''};
    this.calcular = this.calcular.bind(this);
  }

  componentDidMount() {
    console.log('Teste - Fetch API');
    AppState.addEventListener('change', this.handleChange);
  }

  componentWillUnmount() {
    console.log('Teste - Unmount');
    AppState.removeEventListener('change', this.handleChange);
  }

  handleChange = () => {
    console.log(AppState.currentState);
  };

  calcular() {
    let num1 = parseInt(this.state.nota1);
    let num2 = parseInt(this.state.nota2);
    let media = (num1 + num2) / 2;

    if (media >= 6 && this.state.faltas <= 10) {
      this.setState({resultado: 'Aluno foi aprovado'});
    } else {
      this.setState({resultado: 'Aluno foi reprovado'});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Nota 1"
          onChangeText={nota1 => {
            this.setState({nota1});
          }}
          value={this.state.nota1}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Nota 2"
          onChangeText={nota2 => {
            this.setState({nota2});
          }}
          value={this.state.nota2}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Número de faltas"
          onChangeText={faltas => {
            this.setState({faltas});
          }}
          value={this.state.faltas}
        />
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.textButton}>Calcular</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.textResult}>{this.state.resultado}</Text>
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
