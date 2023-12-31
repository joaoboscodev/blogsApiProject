const express = require('express');
const { blogPostController } = require('../controllers');
const { authenticate, blogPostMiddleware } = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  authenticate,
  blogPostMiddleware.validateBlogPost,
  blogPostController.saveOne,
);
router.get(
  '/',
  authenticate,
  blogPostController.getAll,
);
router.get(
  '/:id',
  authenticate,
  blogPostController.getOne,
);
router.put(
  '/:id',
  authenticate,
  blogPostMiddleware.validateBlogPostUpdate,
  blogPostController.update,
);
router.delete(
  '/:id',
  authenticate,
  blogPostController.deleteOne,
);

module.exports = router;