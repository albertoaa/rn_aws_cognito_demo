import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SwitchNavigator } from 'react-navigation';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Confirmation from './components/Confirmation/Confirmation';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

const MainNavigator = SwitchNavigator({
  Signin: { screen: Signin },
  Signup: { screen: Signup },
  // Profile: { screen: Profile },
  Confirmation: { screen: Confirmation },
  ForgotPassword: { screen: ForgotPassword },
  initialRouteName: 'Login',
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
