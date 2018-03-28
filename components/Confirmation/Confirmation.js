import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import awsConfig from '../../src/aws-exports'

Amplify.configure({Auth: awsConfig});


const styles = require('./ConfirmationStyles');

export default class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.navigation.state.params.user.username,
      confirmation_code: '',
      errorMessage: ''
    };
    this.confirmUser = this.confirmUser.bind(this);
  }

  confirmUser = () => {
    Auth.confirmSignUp(this.state.username, this.state.confirmation_code)
      .then(() => { this.props.navigation.navigate('Signin')} )
      .catch(err => { this.setState({ errorMessage: err.message }) });
  };

  render() {
    return(
      <KeyboardAvoidingView
        behavior = "padding"
        style = {styles.fullSize}
      >
        <ScrollView
          contentContainerStyle = {styles.confirmation_container}
          keyboardShouldPersistTaps='never'
          scrollEnabled={false}
        >
          <View style={styles.confirmation_code_container}>
            <Text style={styles.confirmation_text}>
              VERIFY EMAIL
            </Text>
            <Text>
              {this.state.errorMessage}
            </Text>
            <TextInput
              style = {styles.confirmation_input}
              onChangeText = {(username) => this.setState({username})}
              value = {this.props.navigation.state.params.user.username}
              placeholder = "EMAIL ADDRESS"
              keyboardType = "email-address"
              autoCapitalize = "none"
              underlineColorAndroid = "#fff"
            />
            <TextInput
              style = {styles.confirmation_input}
              onChangeText = {(confirmation_code) => this.setState({confirmation_code})}
              placeholder = "CONFIRMATION CODE"
              autoCapitalize = "none"
              onFocus = { () => this.setState({confirmation_code: ""})}
              keyboardType = "numeric"
              underlineColorAndroid = "#fff"/>

          </View>
          <View style = {styles.confirmation_actions_container}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin')}>
              <Text style={styles.login_button}>
                GO BACK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.confirmUser}
              style={styles.confirmation_button}
            >
              <Text style={styles.confirmation_text}>
                CONFIRM
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}