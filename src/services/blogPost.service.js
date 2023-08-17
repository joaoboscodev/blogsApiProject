const { BlogPost, Category, PostCategory, sequelize } = require('../models');

const getAll = async (options) => {
  const blogPost = await BlogPost.findAll(options);
  return blogPost;
};

const getOne = async (options) => {
  const blogPost = await BlogPost.findOne(options);
  return blogPost;
};

const getBlogPostById = async (id) => {
  const blogPost = await BlogPost.findOne({ where: { id } });
  if (!blogPost) return { error: 'BlogPost does not exist', status: 404 };
  return blogPost;
};

const saveOne = async ({ userId, title, content, categoryIds }) => {
  const categories = await Category.findAll({ where: { id: categoryIds } });

  if (categoryIds.length !== categories.length) {
    const error = new Error('one or more "categoryIds" not found');
    error.code = 400;
    throw error;
  }
  const result = await sequelize.transaction(async (t) => {
    const blogPost = await BlogPost.create({ userId, title, content }, { transaction: t });

    await PostCategory.bulkCreate(
      categoryIds.map((id) => ({ postId: blogPost.id, categoryId: id })),
       { transaction: t },
    );

    return blogPost;
  });

  return result;
};

module.exports = {
  getAll,
  getOne,
  saveOne,
  getBlogPostById,
};