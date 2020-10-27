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
    color: 'black',
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
  registerEntry: {
    marginTop: 50,
  },
  registerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit() {
    firebaseAuth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.navigation.navigate('Home');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <Text style={styles.loginTitle}>Login</Text>
          <TextInput
            style={styles.inputText}
            value={this.state.email}
            placeholder="Email Address"
            onChangeText={(text) => this.setState({email: text})}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.inputText}
            value={this.state.password}
            placeholder="Password"
            onChangeText={(text) => this.setState({password: text})}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
          />
          <TouchableHighlight
            style={styles.clickButton}
            onPress={this.handleSubmit.bind(this)}>
            <Text>Click Enter</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.registerEntry}
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}>
            <Text style={styles.registerText}>New Register Here</Text>
          </TouchableHighlight>
        </SafeAreaView>
      </>
    );
  }
}

export default Login;
