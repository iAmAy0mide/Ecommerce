const express = require('express');
const passport = require('passport');
const userModel = require('./models/user.mongo');
const bcrypt = require('bcrypt');
const session = require('express-session');

const app = express();
const LocalStrategy = require('passport-local').Strategy;

const userRouter = require('./routes/users/user.router');
const cartRouter = require('./routes/cart/cart.router');
const productRouter = require('./routes/products/products.router');
const {
    storeCreatorRouter,
    storeCreatorProducts  
 } = require('./routes/store-creator/store-creator.router');


app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,        
    }
}));

app.use('/user', userRouter);
app.use('/cart', cartRouter);
app.use('/products', productRouter);
app.use('/store', storeCreatorRouter);
app.use('/store/products', storeCreatorProducts);

app.get('/', (req, res) => {
    res.send('Yo man');
});
app.get('/login', (req, res) => {
    res.json({ msg: 'login'});
});
app.use('*', (req, res) => {
    res.status(404).json({ error: 'page not found'})
});

module.exports = app;