const express = require('express');
const { categoryController } = require('../controllers');
const { authenticate, categoryMiddleware } = require('../middlewares');

const router = express.Router();

router.post('/', categoryMiddleware.validateCategory, authenticate, categoryController.saveOne);
router.get('/', authenticate, categoryController.getAll);

module.exports = router;