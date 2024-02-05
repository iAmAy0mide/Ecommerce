const express = require('express');
const passport = require('passport');
const userModel = require('./models/user.mongo');
const bcrypt = require('bcrypt');

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

// passport.use(new LocalStrategy((userEmail, password, done) => {
//     userModel.findOne({ userEmail }, async (err, user) => {
//         if (err) { return done(err)}
//         if (!user) { return done(null, false)}
//         // const matchPassword = await bcrypt.compare(password, user.password);
//         return done(null, user.userEmail);
//         // if (matchPassword) {
//         // }
//     });
// }));

app.use('/user', userRouter);
app.use('/cart', cartRouter);
app.use('/products', productRouter);
app.use('/store', storeCreatorRouter);
app.use('/store/products', storeCreatorProducts);

// userRouter.post('/login', passport.authenticate('local', { session: false }), function(req, res) {
//     res.json({ user: req.user });
//   });

app.get('/', (req, res) => {
    res.send('Yo man');
});
app.use('*', (req, res) => {
    res.status(404).json({ error: 'page not found'})
});

module.exports = app;