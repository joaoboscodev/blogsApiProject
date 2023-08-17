const express = require('express');
const { userController } = require('../controllers');
const { userMiddleware, authenticate } = require('../middlewares');

const router = express.Router();

router.post('/', userMiddleware.validateUser, userController.saveOne);
router.get('/', authenticate, userController.getAll);

module.exports = router;