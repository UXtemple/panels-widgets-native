'use strict';

var React = require('react-native');
// var Feed = require('./feed');

var Property = require('./property');

class Demo extends React.Component {
  render() {
    return <Property.Card {...Property.cards()[0]} />;
  }
}

React.AppRegistry.registerComponent('PanelsWidgetsNative', () => Demo);
