const express = require('express');
const userRouter = express.Router();

// 导入 userController
const userController = require('../Controller/userController');

// user
userRouter.get('/', userController.handleUser);
module.exports = userRouter;
