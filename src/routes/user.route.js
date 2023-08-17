const express = require('express');
const { userController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

const router = express.Router();

router.post('/', userMiddleware.validateUser, userController.saveOne);

module.exports = router;