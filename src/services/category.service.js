const { Category } = require('../models');

const getAll = async (options) => {
  const categories = await Category.findAll(options);
  return categories;
};

const getOne = async (options) => {
  const categories = await Category.findOne(options);
  return categories;
};

const getCategoryById = async (id) => {
  const category = await Category.findOne({ where: { id } });
  if (!category) return { error: 'Category does not exist', status: 404 };
  return category;
};

const saveOne = async (data) => {  
  try {
    const newCategory = await Category.create(data);
    return newCategory;
  } catch (e) {
    return { status: 500, message: e.message };
  }
};

module.exports = {
  getAll,
  getOne,
  saveOne,
  getCategoryById,
};