const express = require('express');

const productRouter = express.Router();

// user
productRouter.get('/products', getProducts);
productRouter.get('/products/:productId', getProduct);
productRouter.get('/category/:category', getProductsByCategory);


module.exports = productRouter;