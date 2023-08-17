const express = require('express');
const { categoryController } = require('../controllers');
const { authenticate, categoryMiddleware } = require('../middlewares');

const router = express.Router();

router.post('/', categoryMiddleware.validateCategory, authenticate, categoryController.saveOne);

module.exports = router;