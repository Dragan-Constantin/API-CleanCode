const Movie = require('../models/movie');

// Create a new movie
exports.createMovie = async (require, res) => {
  try {
    const movie = new Movie(require.body);
    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read all movies
exports.getAllMovies = async (require, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Read a movie by ID
exports.getMovieById = async (require, res) => {
  try {
    const movie = await Movie.findById(require.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};