const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  shortDescription: String,
  imageUrl: String,
  longDescription: String,
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
