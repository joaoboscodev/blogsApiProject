const { userService } = require('../services');

const saveOne = async (req, res) => {
  const userData = req.body;
  const { status, message, token } = await userService.saveOne(userData);
  return res.status(status).json({ message, token });
};

const getAll = async (req, res) => {
  const userList = await userService.getAll({});
  return res.status(200).json(userList);
};

module.exports = {
  saveOne, getAll,
};