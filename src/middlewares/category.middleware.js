const { categorySchema } = require('./validators');

const BAD_REQUEST_CODE = 400;

const validateCategory = (req, res, next) => {
  const { error } = categorySchema.validate(req.body);
  if (error) {
    return res.status(BAD_REQUEST_CODE).json({
      message: error.details[0].message,
    });
  }

  next();
};

module.exports = {
  validateCategory,
};