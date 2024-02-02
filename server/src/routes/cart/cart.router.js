const express = require('express');

const cartRouter = express.Router();

cartRouter.post('/', addToCart);
cartRouter.delete('/remove/:productId', removeFromCart);


module.exports = cartRouter;