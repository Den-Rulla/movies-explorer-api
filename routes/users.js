const usersRouter = require('express').Router();

const {
  validateUserUpdate,
} = require('../middlewares/userValidator');

const {
  getCurrentUser,
  updateUser,
} = require('../controllers/users');

usersRouter.get('/users/me', getCurrentUser);
usersRouter.patch('/users/me', validateUserUpdate, updateUser);

module.exports = usersRouter;
