const Movie = require('../models/movie');

// Create a new movie
exports.createMovie = async (require, result) => {
  try {
    const movie = new Movie(require.body);
    const savedMovie = await movie.save();
    result.status(201).json(savedMovie);
  } catch (error) {
    result.status(400).json({ error: error.message });
  }
};

// Read all movies
exports.getAllMovies = async (require, result) => {
  try {
    const movies = await Movie.find();
    result.json(movies);
  } catch (error) {
    result.status(500).json({ error: 'Server error' });
  }
};

// Read a movie by ID
exports.getMovieById = async (require, result) => {
  try {
    const movie = await Movie.findById(require.params.id);
    if (!movie) {
      return result.status(404).json({ error: 'Movie not found' });
    }
    result.json(movie);
  } catch (error) {
    result.status(500).json({ error: 'Server error' });
  }
};