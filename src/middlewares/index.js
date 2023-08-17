const loginMiddleware = require('./login.middleware');
const userMiddleware = require('./user.middleware');
const authenticate = require('./authenticator.middleware');

module.exports = {
  loginMiddleware,
  userMiddleware,
  authenticate,
};