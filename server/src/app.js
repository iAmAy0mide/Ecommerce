const express = require('express');
const passport = require();
const userModel = require('./models/user.mongo');
const bcrypt = require('bcrypt');

const app = express();
const LocalStrategy = require('passport-local');

const userRouter = require('./routes/users/user.router');
const cartRouter = require('./routes/cart/cart.router');
const productRouter = require('./routes/products/products.router');
const {
    storeCreatorRouter,
    storeCreatorProducts  
    }
    = require('./routes/store-creator/store-creator.router');


app.use(express.json());
passport.use(new LocalStrategy((userEmail, password, done) => {
    userModel.findOne({ userEmail }, { userEmail })
}));

app.use('/user', userRouter);
app.use('/cart', cartRouter);
app.use('/products', productRouter);
app.use('/store', storeCreatorRouter);
app.use('/store/products', storeCreatorProducts);

app.get('/', (req, res) => {
    res.send('Yo man');
});

module.exports = app;