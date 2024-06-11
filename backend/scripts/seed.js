// scripts/seed.js
const mongoose = require('mongoose');
const Movie = require('../src/models');

mongoose.connect('mongodb://localhost:27017/imdb-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const movies = [
  {
    title: "Inception",
    shortDescription: "A thief who steals corporate secrets...",
    imageUrl: "https://example.com/inception.jpg",
    longDescription: "A thief who steals corporate secrets through the use of dream-sharing technology..."
  },
  {
    title: "The Dark Knight",
    shortDescription: "When the menace known as the Joker...",
    imageUrl: "https://example.com/dark-knight.jpg",
    longDescription: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham..."
  },
  // Add more movie objects here
];

Movie.insertMany(movies).then(() => {
  console.log('Data inserted');
  mongoose.connection.close();
}).catch(err => {
  console.log(err);
  mongoose.connection.close();
});
