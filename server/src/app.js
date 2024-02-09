const express = require('express');
const passport = require('passport');
const session = require('express-session');
const CookieParser = require('cookie-parser');
const CookieSession = require('cookie-session');
const userModel = require('./models/user.mongo');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

const cartRouter = require('./routes/cart/cart.router');
const userRouter = require('./routes/users/user.router');
const productRouter = require('./routes/products/products.router');

const {
    storeCreatorRouter,
    storeCreatorProducts  
 } = require('./routes/store-creator/store-creator.router');
const cookieSession = require('cookie-session');
 
 app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,        
    }
}));
app.use(cookieSession({
    h
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

passport.use(new LocalStrategy({
    usernameField: 'userEmail',
    passwordField: 'password',
}, userModel.authenticate()));
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

app.use('/user', userRouter);
app.use('/cart', cartRouter);
app.use('/products', productRouter);
app.use('/store', storeCreatorRouter);
app.use('/store/products', storeCreatorProducts);

app.get('/', (req, res) => {
    res.send('Yo man');
});

app.post('/login', (req, res) => {
    passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/dashboard'
    }, (err, user, info) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        } 
        if (!user) {
            return res.status(401).json({ error: 'Password or email is incorrect.'})
        }

        req.session.save(() => {

            res.redirect('/dashboard');
        })
        console.log(req.user)
    })(req, res);
});

app.get('/dashboard', (req, res) => {
    // res.send('Dashboard');
    return res.status(200).json({ message: " Here is the dashboard"})
});

app.get('/test', authenticateUser, (req, res, next) => {
    return res.status(200).json({ msg: "Here is the test page"})
});
app.get('/test', passport.authenticate('local'));

app.get('/logout', (req, res) => {
    res.logout((err) => {
        if (err) {
            return res.status(500).json(err);
        }
    return res.redirect('/')
    }) 
});

app.use('*', (req, res) => {
    res.status(404).json({ error: 'page not found'})
});

function authenticateUser(req, res, next) {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.status(401).json({ error: 'You must login first.'})
    }
}

module.exports = app;