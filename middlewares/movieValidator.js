const { Joi, celebrate } = require('celebrate');
const { regExpUrl } = require('../utils/constants');

const validateMovie = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().required().pattern(regExpUrl),
  }),
});

const validateMovieId = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().hex().length(24),
  }),
});

module.exports = {
  validateMovie,
  validateMovieId,
};
