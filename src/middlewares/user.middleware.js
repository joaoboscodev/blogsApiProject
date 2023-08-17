const { userSchema } = require('./validators');

const BAD_REQUEST_CODE = 400;

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(BAD_REQUEST_CODE).json({
      message: error.details[0].message,
    });
  }

  next();
};

module.exports = {
  validateUser,
};