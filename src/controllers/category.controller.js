const { categoryService } = require('../services');

const saveOne = async (req, res) => {
  const category = req.body;
  const data = await categoryService.saveOne(category);
  return res.status(201).json(data);
};

const getAll = async (req, res) => {
  const categoryList = await categoryService.getAll({});
  return res.status(200).json(categoryList);
};

const getOne = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const category = await categoryService.getCategoryById(id);
  return res.status(200).json(category);
};

module.exports = {
  saveOne,
  getAll,
  getOne,
};