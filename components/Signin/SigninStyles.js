const React = require('react-native');
const { Dimensions, StyleSheet } = React;

module.exports = StyleSheet.create({
  fullSize: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  signin_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signin_form_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signin_actions_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  signin_input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'left',
    fontSize: 10
  },
  signin_button: {
    backgroundColor: '#000',
    width: Dimensions.get('window').width,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signin_button_text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 10
  },
  signup_button: {
    backgroundColor: '#fff',
    color: "lightgrey",
    width: 200,
    margin: 10,
    height: 20,
    fontSize: 10,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
});