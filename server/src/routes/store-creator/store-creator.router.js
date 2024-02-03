const express = require('express');

const storeCreatorRouter = express.Router();
const storeCreatorProducts = express.Router();

// storeCreatorRouter.get('/stores', getStores);
// storeCreatorRouter.post('/create-store', createStore);
// storeCreatorRouter.get('/stores/:store-name', getStore);
// storeCreatorRouter.put('/update/:store-name', updateStore);
// storeCreatorRouter.delete('/delete/:store-name', deleteStore);

// prefix '/store/products'
// storeCreatorProducts.get('/:storeId', getStoreProducts);
// storeCreatorProducts.post('/add-product', addStoreProduct);
// storeCreatorProducts.get('/:storeId/product/:productId', getStoreProduct);
// storeCreatorProducts.put('/:storeId/product/:productId/update', updateStoreProduct);
// storeCreatorProducts.delete('/:storeId/product/:productId/remove-product', deleteStoreProduct);


module.exports = {
    storeCreatorRouter,
    storeCreatorProducts,
};