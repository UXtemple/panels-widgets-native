var DATA = [{
  description: '',
  image: {
    card: 'http://www.private-residences.net/immo-pics/search_2011/4783/Foto_64413.jpg',
    detailed: 'http://www.private-residences.net/immo-pics/1680w/4783/Foto_64413.jpg'
  },
  price: 5875000,
  properties: [
    '2 Beds',
    '4 Baths',
    '1900 Sq.m'
  ],
  title: 'Two rustic luxury chavars in a coveted location',
  group: 'For sale'
}, {
  description: '',
  image: {
    card: 'http://www.private-residences.net/immo-pics/search_2011/4787/Foto_64329.jpg',
    detailed: ''
  },
  price: 1050000,
  properties: [
    '2 Beds',
    '4 Baths',
    '1900 Sq.m'
  ],
  title: 'Great new villa in Valldemossa with unobstructed views',
  group: 'For sale'
}, {
  description: '',
  image: {
    card: 'http://www.private-residences.net/immo-pics/search_2011/4783/Foto_64413.jpg',
    detailed: 'http://www.private-residences.net/immo-pics/1680w/4783/Foto_64413.jpg'
  },
  price: 5875000,
  title: 'Two rustic luxury chavars in a coveted location',
  group: 'For sale'
}, {
  description: '',
  image: {
    card: 'http://www.private-residences.net/immo-pics/search_2011/4787/Foto_64329.jpg',
    detailed: ''
  },
  price: 1050000,
  title: 'Great new villa in Valldemossa with unobstructed views',
  group: 'For sale'
}];

function cards() {
  return DATA.map((record) => {
    return {
      image: record.image.card,
      group: record.group,
      title: record.title,
      price: record.price,
      properties: record.properties
    };
  });
}
exports.cards = cards;
