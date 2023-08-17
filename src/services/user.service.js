const { User } = require('../models');
const getToken = require('../utils/login');

const CONFLICT_CODE = 409;
const CREATED_CODE = 201;
const CONFLICT_MESSAGE = 'User already registered';

const getAll = async (options) => {
  const users = await User.findAll(options);
  return users.map(({ id, displayName, email, image }) => ({ id, displayName, email, image }));
};
const getOne = async (options) => {
  const users = await User.findOne(options);
  return users;
};

const saveOne = async (data) => {
  const {
    displayName,
    email,
    password,
    image,
  } = data;

  const exists = await User.findOne({ where: { email } });

  if (exists) return { status: CONFLICT_CODE, message: CONFLICT_MESSAGE };

  try {
    const newUser = await User.create({ displayName, email, password, image });
    const token = await getToken(newUser);
    return { status: CREATED_CODE, token };
  } catch (e) {
    return { status: 500, message: e.message };
  }
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id } });
  return user;
};

module.exports = {
  getAll,
  getOne,
  saveOne,
  getUserById,
};