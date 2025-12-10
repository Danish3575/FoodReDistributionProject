// src/data/dishes.js
import paneerImg from '../assets/paneer1.jpg';
import biryaniImg from '../assets/biryani1.jpg';
import saladImg from '../assets/salad.jpg';
import dosaImg from '../assets/dosa.jpg';
import samosaImg from '../assets/samosa.jpg';
import friedriceImg from '../assets/friedrice.jpg';

const donorDishes = [
  {
    id: 1,
    place: 'Miyapur',
    restaurantName: 'Mehfil',
    restaurantCode: 'MEH123',
    price: '200',
    quantity: '10 meals',
    imageUrl: paneerImg,
    dishName: 'Paneer Butter Masala',
  },
  {
    id: 2,
    place: 'Nizampet',
    restaurantName: 'Pista House',
    restaurantCode: 'PIS456',
    price: '150',
    quantity: '15 meals',
    imageUrl: biryaniImg,
    dishName: 'Chicken Biryani',
  },
  {
    id: 3,
    place: 'Kukatpally',
    restaurantName: 'Green Leaf',
    restaurantCode: 'GLC789',
    price: '120',
    quantity: '12 meals',
    imageUrl: saladImg,
    dishName: 'Veg Salad',
  },
  {
    id: 4,
    place: 'Bachupally',
    restaurantName: 'Sunrise',
    restaurantCode: 'SUN321',
    price: '180',
    quantity: '8 meals',
    imageUrl: dosaImg,
    dishName: 'Masala Dosa',
  },
  {
    id: 5,
    place: 'Pragathinagar',
    restaurantName: 'Taste Buds',
    restaurantCode: 'TB654',
    price: '90',
    quantity: '25 snacks',
    imageUrl: samosaImg,
    dishName: 'Samosa',
  },
  {
    id: 6,
    place: 'Ameerpet',
    restaurantName: 'City Bites',
    restaurantCode: 'CB987',
    price: '130',
    quantity: '10 meals',
    imageUrl: friedriceImg,
    dishName: 'Veg Fried Rice',
  },
];

export default donorDishes;
