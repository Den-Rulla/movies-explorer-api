const moviesRouter = require('express').Router();

const { validateMovie, validateMovieId } = require('../middlewares/movieValidator');

const {
  getSavedMovies,
  saveMovie,
  deleteMovie,
} = require('../controllers/movies');

moviesRouter.get('/movies', getSavedMovies);
moviesRouter.post('/movies', validateMovie, saveMovie);
moviesRouter.delete('/movies/:_movieId', validateMovieId, deleteMovie);

module.exports = moviesRouter;
