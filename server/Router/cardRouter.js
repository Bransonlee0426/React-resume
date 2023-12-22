const express = require('express');
const cardRouter = express.Router();

const cardController = require('../Controller/cardController');

cardRouter.get('/', cardController.handleCards);
module.exports = cardRouter;
