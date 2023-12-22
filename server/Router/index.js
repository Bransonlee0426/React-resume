const express = require('express');
const mainRouter = express.Router();
const userRouter = require('./userRouter');
const cardRouter = require('./cardRouter');

// 使用导入的路由模块
mainRouter.use('/user', userRouter);
mainRouter.use('/cards', cardRouter);

module.exports = mainRouter;
