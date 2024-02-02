const express = require('express');
const app = express(); 

const userRouter = require('./routes/users/user.router');
const cartRouter = require('./routes/cart/cart.router');
const productRouter = require('./routes/products/products.router');
const {
    storeCreatorRouter,
    storeCreatorProducts  
    }
    = require('./routes/store-creator/store-creator.router');


app.use(express.json());
app.use('/user', userRouter);
app.use('/cart', cartRouter);
app.use('/products', productRouter);
app.use('/store', storeCreatorRouter);
app.use('/store/products', storeCreatorProducts);

app.get('/', (req, res) => {
    res.send('Yo man');
});

module.exports = app;