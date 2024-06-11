const express = require('express');
const Movie = require('./models');
const router = express.Router();

router.get('/movies', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

router.get('/movies/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
});

router.post('/movies', async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.json(movie);
});

module.exports = router;
