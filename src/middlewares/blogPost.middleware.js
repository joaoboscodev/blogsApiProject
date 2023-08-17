const { blogPostSchema } = require('./validators');

const validateBlogPost = (req, res, next) => {
  const { error } = blogPostSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = {
  validateBlogPost,
};