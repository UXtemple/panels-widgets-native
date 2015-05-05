var { StyleSheet } = require('react-native');
var { vw, vh, vmin, vmax } = require('react-native-viewport-units');

var slideshowHeight = 30*vh;
var propertyDataHeight = 20*vh; // slideshowHeight * 0.67;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 10,
    marginRight: 10
  },
  groupArrow: {
    backgroundColor: '#E6E6E6',
    width: 10,
    height: 20
  },
  groupText: {
    textAlign: 'right',
    fontFamily: 'Roboto',
    marginRight: 5
  },
  separator: {
    alignSelf: 'stretch',
    backgroundColor: '#E6E6E6',
    height: 1
  },
  slideshow: {
    height: slideshowHeight,
    marginTop: 10
  },
  image: {
    alignSelf: 'stretch',
    height: slideshowHeight
  },
  title: {
    color: '#333333',
    fontSize: 14,
    lineHeight: 16,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Roboto'
  },
  price: {
    color: '#C49A6C',
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Roboto',
    fontSize: 24
  },
  properties: {
    flexDirection: 'row',
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20
  },
  property: {
    fontFamily: 'Roboto',
    color: '#6D6E71',
    fontSize: 14,
    lineHeight: 16,
    marginRight: 10
  },
  propertyData: {
    flexDirection: 'row',
    height: propertyDataHeight
  },
  summary: {
    borderColor: 'red',
    borderWidth: 1,
    width: 80*vw
  },
  like: {
    borderColor: 'green',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 20*vw
  },
  likeTest: {
    backgroundColor: '#E6E6E6',
    borderColor: 'pink',
    borderWidth: 1,
    width: 10,
    height: 20
  },
});
