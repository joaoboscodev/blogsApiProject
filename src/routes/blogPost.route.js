const express = require('express');
const { blogPostController } = require('../controllers');
const { authenticate, blogPostMiddleware } = require('../middlewares');

const router = express.Router();

router.post('/', authenticate, blogPostMiddleware.validateBlogPost, blogPostController.saveOne);
router.get('/', authenticate, blogPostController.getAll);
router.get('/:id', authenticate, blogPostController.getOne);

module.exports = router;