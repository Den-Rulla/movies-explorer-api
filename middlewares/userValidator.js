const { Joi, celebrate } = require('celebrate');

const validateUserUpdate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
  }),
});

const validateSignup = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(2).required(),
  }),
});

const validateSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports = {
  validateSignup,
  validateSignin,
  validateUserUpdate,
};
