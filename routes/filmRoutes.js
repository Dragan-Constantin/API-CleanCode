const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');

// Create a new movie
router.post('/', filmController.createMovie);

// Read all movies
router.get('/', filmController.getAllMovies);

// Read a movie by ID
router.get('/:id', filmController.getMovieById);

module.exports = router;