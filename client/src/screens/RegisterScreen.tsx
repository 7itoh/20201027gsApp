import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import firebaseAuth from '@react-native-firebase/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006948',
  },
  loginTitle: {
    alignSelf: 'center',
    fontSize: 24,
    marginBottom: 24,
    color: '#fff',
  },
  inputText: {
    height: 40,
    width: 350,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
    padding: 8,
    fontWeight: 'bold',
  },
  clickButton: {
    backgroundColor: '#fff',
    height: 42,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 40,
  },
});

class Register extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit() {
    firebaseAuth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.navigation.navigate('Login');
      })
      .catch((e) => {
        throw e;
      });
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <Text style={styles.loginTitle}>Register</Text>
          <TextInput
            style={styles.inputText}
            value={this.state.email}
            onChangeText={(text) => {
              this.setState({
                email: text,
              });
            }}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email Address"
          />
          <TextInput
            style={styles.inputText}
            value={this.state.password}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableHighlight
            style={styles.clickButton}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="#009999">
            <Text>Click Your Site</Text>
          </TouchableHighlight>
        </SafeAreaView>
      </>
    );
  }
}

export default Register;
