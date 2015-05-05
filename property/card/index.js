'use strict';

var React = require('react-native');
var {
  Image,
  Text,
  View,
} = React;

var numeral = require('numeral');
numeral.language('de', require('numeral/languages/de'));
numeral.language('de');
var styles = require('./styles');

//<Image source={{uri: this.props.arrow}} style={styles.groupArrow} />
//<Image source={{uri: this.props.like}} style={styles.like} />

class Card extends React.Component {
  render() {
    var properties = this.props.properties.map(prop => <Text style={styles.property}>{prop}</Text>);

    return (
      <View style={styles.container}>
        <View style={styles.separator} />

        <View style={styles.group}>
          <Text style={styles.groupText}>{this.props.group}</Text>
          <View style={styles.groupArrow} />
        </View>
        
        <View style={styles.slideshow}>
          <Image source={{uri: this.props.image}} style={styles.image} />
        </View>
        
        <View style={styles.propertyData}>
          <View style={styles.summary}>
            <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
            <Text style={styles.price}>{numeral(this.props.price).format('$0,0')}</Text>
            <View style={styles.properties}>{properties}</View>
          </View>
          <View style={styles.like}>
            <View style={styles.likeTest} />
          </View>
        </View>
      </View>
    );
  }
}

Card.propTypes = {
	group: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired,
	image: React.PropTypes.string.isRequired,
	price: React.PropTypes.number.isRequired
}

module.exports = Card;
