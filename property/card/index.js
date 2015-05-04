'use strict';

var React = require('react-native');
var {
  Image,
  Text,
  View,
} = React;

var styles = require('./styles');

class Card extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.separator} />
        <Text style={styles.type}>{this.props.type}</Text>
        <Image source={{uri: this.props.image}} style={styles.image} />
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

module.exports = Card;
