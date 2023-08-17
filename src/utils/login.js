const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const getToken = async (user) => {
  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
  return token;
};

module.exports = getToken;