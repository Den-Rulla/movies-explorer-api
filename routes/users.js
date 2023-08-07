const usersRouter = require('express').Router();

const {
  validateUserUpdate,
  validateUserId,
} = require('../middlewares/userValidator');

const {
  getAllUsers,
  getUserById,
  getCurrentUser,
  updateUser,
} = require('../controllers/users');

usersRouter.get('/users', getAllUsers);
usersRouter.get('/users/me', getCurrentUser);
usersRouter.get('/users/:userId', validateUserId, getUserById);
usersRouter.patch('/users/me', validateUserUpdate, updateUser);

module.exports = usersRouter;
