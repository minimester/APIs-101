const knex = require('knex');
const config = require('../config/db.config');
const { v4: uuidv4 } = require('uuid');

const db = knex(config);

function getAllMovies() {
  return db.select('*').from('movie');
}

function getMovieById(movieId) {
  return db.select('*')
      .from('movie')
      .where({ id: movieId })
      .first();
}

function createMovie(movie) {
  movie.id = uuidv4();
  return db.insert(movie)
      .into('movie')
      .returning('*');
}

function updateMovie(movie) {
  return db('movie')
      .where({ id: movie.id })
      .update({
        name: movie.name,
        genre: movie.genre,
        img: movie.img,
      })
      .returning('*');
}

function deleteMovie(movieId) {
  return db('movie')
      .where({ id: movieId })
      .del();
}

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
