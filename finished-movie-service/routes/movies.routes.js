const router = require('express').Router();
const { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie } = require('../db/movies');

router.get('/', (req, res) => {
  getAllMovies().then((movies) => {
    res.json(movies);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  getMovieById(req.params.id).then((movie) => {
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  }).catch((err) => {
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  const newMovie = {
    name: req.body.name,
    genre: req.body.genre,
    img: req.body.img,
  };
  createMovie(newMovie).then((movie) => {
    res.status(201).json({
      message: 'Movie created',
      movie,
    });
  }).catch((err) => {
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  const updatedMovie = {
    id: req.params.id,
    name: req.body.name,
    genre: req.body.genre,
    img: req.body.img,
  };
  updateMovie(updatedMovie).then((movie) => {
    if (movie.length === 1) {
      res.json(movie[0]);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  }).catch((err) => {
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  deleteMovie(req.params.id).then((isDeleted) => {
    if (isDeleted === 1) {
      res.json({
        message: 'Movie deleted',
        id: req.params.id,
      });
    } else {
      res.status(404).json({
        error: 'Movie not found',
      });
    }
  }).catch((err) => {
    res.status(500).json(err);
  });
});

module.exports = router;
