var DATA = [{
  description: '',
  image: {
    card: 'http://www.private-residences.net/immo-pics/search_2011/4783/Foto_64413.jpg',
    detailed: 'http://www.private-residences.net/immo-pics/1680w/4783/Foto_64413.jpg'
  },
  price: '5,875,000 €',
  title: 'Two rustic luxury chavars in a coveted location',
  type: 'For sale'
}, {
  description: '',
  image: {
    card: 'http://www.private-residences.net/immo-pics/search_2011/4787/Foto_64329.jpg',
    detailed: ''
  },
  price: '1,050,000 €',
  title: 'Great new villa in Valldemossa with unobstructed views',
  type: 'For sale'
}, {
  description: '',
  image: {
    card: 'http://www.private-residences.net/immo-pics/search_2011/4783/Foto_64413.jpg',
    detailed: 'http://www.private-residences.net/immo-pics/1680w/4783/Foto_64413.jpg'
  },
  price: '5,875,000 €',
  title: 'Two rustic luxury chavars in a coveted location',
  type: 'For sale'
}, {
  description: '',
  image: {
    card: 'http://www.private-residences.net/immo-pics/search_2011/4787/Foto_64329.jpg',
    detailed: ''
  },
  price: '1,050,000 €',
  title: 'Great new villa in Valldemossa with unobstructed views',
  type: 'For sale'
}];

function cards() {
  return DATA.map((record) => {
    return {
      image: record.image.card,
      title: record.title,
      type: record.type
    };
  });
}
exports.cards = cards;
