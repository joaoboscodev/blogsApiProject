const loginMiddleware = require('./login.middleware');
const userMiddleware = require('./user.middleware');
const authenticate = require('./authenticator.middleware');
const categoryMiddleware = require('./category.middleware');

module.exports = {
  loginMiddleware,
  userMiddleware,
  authenticate,
  categoryMiddleware,
};