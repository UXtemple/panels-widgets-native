var { StyleSheet } = require('react-native');
var { vw, vh, vmin, vmax } = require('react-native-viewport-units');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
  type: {
    paddingTop: 10,
    textAlign: 'center'
  },
  separator: {
    alignSelf: 'stretch',
    backgroundColor: '#E6E6E6',
    height: 1
  },
  image: {
    alignSelf: 'stretch',
    height: 30*vh,
    marginTop: 10
  },
  title: {
    color: '#333333',
    fontSize: 24,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20
  }
});
