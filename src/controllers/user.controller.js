const { userService } = require('../services');

const saveOne = async (req, res) => {
  const userData = req.body;
  const { status, message, token } = await userService.saveOne(userData);
  return res.status(status).json({ message, token });
};

module.exports = {
  saveOne,
};