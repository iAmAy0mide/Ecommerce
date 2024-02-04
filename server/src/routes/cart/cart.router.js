const express = require('express');
const {
    addToCart,
    removeFromCart
 } = require('./cart.controller');

const cartRouter = express.Router();

cartRouter.get('/add/:productId', addToCart);
cartRouter.delete('/remove/:productId', removeFromCart);


module.exports = cartRouter;