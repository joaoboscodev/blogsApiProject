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

const getOne = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = await userService.getUserById(id);
  if (user.error) return res.status(user.status).json({ message: user.error });
  return res.status(200).json(user);
};

module.exports = {
  saveOne, getAll, getOne,
};