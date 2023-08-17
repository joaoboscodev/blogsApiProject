const { blogPostService } = require('../services');
const { User } = require('../models');

const saveOne = async (req, res) => {
  const userId = req.user.id;
  const blogPost = req.body;
  try {
    const data = await blogPostService.saveOne({ ...blogPost, userId });

    const { error, status } = data;

    if (error) return res.status(status).json({ message: error.message });
    return res.status(201).json(data);
  } catch (error) {
    return res.status(error.code || 500).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  const blogPostList = await blogPostService.getAll({
     include: [
      'categories', 
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });
  return res.status(200).json(blogPostList);
};

const getOne = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const blogPost = await blogPostService.getBlogPostById(
      { 
        where: { id },
        include: [
          'categories', 
          { model: User, as: 'user', attributes: { exclude: ['password'] } }], 
        },
    );
    console.log({ query: blogPost });
    return res.status(200).json(blogPost);
  } catch ({ message, code }) {
    return res.status(code || 500).json({ message });
  }
};

module.exports = {
  saveOne,
  getAll,
  getOne,
};