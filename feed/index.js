'use strict';

var React = require('react-native');
var {
  ListView,
  Text,
  View
} = React;

var Property = require('../property');

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState() {
    var dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});

    var data = [];

    Property.cards().forEach((property) => {
      data.push({
        type: Property.TYPE,
        data: property
      });

      data.push({
        type: 'WEATHER',
        data: {
          city: 'Palma de Majorca',
          degrees: '30'
        }
      });
    });

    var feed = dataSource.cloneWithRows(data);

    return {feed};
  }

  getDataSource(feed) {
    return this.state.dataSource.cloneWithRows(feed);
  }

  renderCard(card) {
    var ret;
    switch(card.type) {
      case Property.TYPE:
        ret = <Property.Card {...card.data} />;
        break;
      default:
        ret = (
          <View>
            <Text>{card.type}</Text>
            <Text>{card.data}</Text>
          </View>
        );
        break;
    }
    return ret;
  }

  render() {
    return <ListView dataSource={this.state.feed} renderRow={this.renderCard.bind(this)} />;
  }
};

module.exports = Feed;
