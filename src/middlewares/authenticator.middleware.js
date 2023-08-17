const jwt = require('jsonwebtoken');

const { userService } = require('../services');

const secret = process.env.JWT_SECRET;

function extractToken(bearerToken) {
  if (bearerToken.includes('Bearer')) {
    return bearerToken.split(' ')[1];
  }
  return bearerToken;
}

const authenticate = async (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = extractToken(bearerToken);
  console.log({ bearerToken, secret });
  try {
    const decoded = jwt.verify(token, secret);

    const user = await userService.getUserById(decoded.data.userId);
    console.log({ decoded });

    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authenticate;