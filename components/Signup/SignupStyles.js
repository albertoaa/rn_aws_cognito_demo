const React = require('react-native');
const { Dimensions, StyleSheet } = React;

module.exports = StyleSheet.create({
  signup_container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  signup_form_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signup_banner_text: {
    width: Dimensions.get('window').width,
    height: 40,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    letterSpacing: 10,
    textAlign: 'center'
  },
  signup_input: {
    width: 200,
    height: 30,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'left',
    fontSize: 10
  },
  signup_actions_container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  login_button: {
    backgroundColor: '#fff',
    color: "lightgrey",
    width: 200,
    margin: 10,
    height: 20,
    fontSize: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 10
  },
  signup_button: {
    backgroundColor: '#C4DE9F',
    width: Dimensions.get('window').width,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signup_text: {
    color: '#000',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 10
  },
});