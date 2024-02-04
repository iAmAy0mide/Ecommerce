const {
    addProductToCart,
    removeProductFromCart
} = require('../../models/cart.model');

async function addToCart(req, res) {
    const {productId}  = req.params;
    
    return res.status(200).json(await addProductToCart(productId))
}

async function removeFromCart(req, res) {
    const {productId}  = req.params;

    return res.status(200).json(await removeFromCart(productId));
}

module.exports = {
    addToCart,
    removeFromCart,
};