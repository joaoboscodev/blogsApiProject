const { blogPostSchema } = require('./validators');

const validateBlogPost = (req, res, next) => {
  const { error } = blogPostSchema.create.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateBlogPostUpdate = (req, res, next) => {
  const { error } = blogPostSchema.update.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  validateBlogPost,
  validateBlogPostUpdate,
};