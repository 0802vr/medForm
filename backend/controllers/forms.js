const Card = require('../models/Card');
const Error400 = require('../errors/error400');
/* const Error403 = require('../errors/error403'); */
/* const Error404 = require('../errors/error404'); */

const getForm = (req, res) => {
  Card.find({})
    .then((card) => {
      res.send(card);
    })
    .catch((err) => { console.log(err); });
};

const createForm = (req, res, next) => {
  const {
    name,
    date,
    year,
    otdel,
    postF,
    postS,
    postT,
  } = req.body;

  Card.create({
    name,
    date,
    year,
    otdel,
    postF,
    postS,
    postT,
  })
    .then((card) => {
      res.send({ card });
    })
    // eslint-disable-next-line consistent-return
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new Error400('Переданы некорретные данные'));
      }
      next(err);
    });
};
/* const deleteMovie = (req, res, next) => {
  const { movieId } = req.params;
  const userId = req.user._id;
  Movie.findById(movieId)
    .orFail(() => {
      throw new Error404('Карточка с указанным _id не найдена');
    })
    .then((movie) => {
      if (movie.owner.toString() === userId) {
        return Movie.findByIdAndRemove(movieId)
          .then((deletedMovie) => res.send(deletedMovie))
          .catch(next);
      }
      throw new Error403('Доступ запрещен');
    })

    .catch((err) => {
      if (err.name === 'CastError') {
        next(new Error400('Переданы некорретные данные'));
      } else {
        next(err);
      }
    });
}; */

module.exports = {
  getForm,
  createForm,
  /*  deleteMovie, */
};
