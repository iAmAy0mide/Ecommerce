const cartModel = require('./cart.mongo');
const productModel = require('./store-products.mongo');

async function findProductById(productId) {
    try {
        const product = await productModel.findById({productId});
        return product;
    } catch (error) {
        throw new Error(error);
    }
}

async function isExistsinCart() {
    try {
        const isExists = await cartModel.findById({productId});
        return isExists;
    } catch (error) {
        throw new Error(error);
    }
}

async function addProductToCart(productId) {
    const product = await findProductById(productId);

    try {
        if (product) {

            const isProductInCart = await isExistsinCart(productId);
    
            if (isProductInCart) {
                const existingProd = cartModel.findOneAndUpdate({productId},
                    {
                        // prodId: productId,
                        $inc:{ count: 1 }
                    }, {
                        new: true,
                    });
    
                return existingProd;
            }
    
            const newCartProduct = await cartModel.create({
                prodId: productId,
                count: 0,
            })
    
            return newCartProduct;
        } else {
            return "Product does not exist in the database."
        }
    } catch (error) {
        throw new Error(error);
    }
}

async function removeProductFromCart(productId) {
    const rmProduct = await isExistsinCart(productId);

    if (rmProduct) {
        return await cartModel.deleteOne({prodId: productId});
    }
}

module.exports = {
    addProductToCart,
    removeProductFromCart
};