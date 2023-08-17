const MISSING_FIELD_MESSAGE = 'Some required fields are missing';
const BAD_REQUEST_CODE = 400;

const validateFields = (req, res, next) => {
  const credentials = req.body;
  const { email, password } = credentials;

  if (!email || !password) {
    return res.status(BAD_REQUEST_CODE).json({
      message: MISSING_FIELD_MESSAGE,
    });
  }

  next();
};

module.exports = {
  validateFields,
};