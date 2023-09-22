const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Create a new movie
router.post('/', movieController.createMovie);

// Read all movies
router.get('/', movieController.getAllMovies);

// Read a movie by ID
router.get('/:id', movieController.getMovieById);

module.exports = router;