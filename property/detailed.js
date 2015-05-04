'use strict';

var React = require('react-native');
var {
  Image,
  Text,
  View,
} = React;

var Detailed = React.createClass({
  render: function() {
    return (
      <View>
        <Image source={{uri: this.props.image}} />
        <Text>{this.props.title}</Text>
      </View>
    );
  }
});

module.exports = Detailed;
