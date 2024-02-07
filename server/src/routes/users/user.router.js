const express = require('express');
const passport = require('passport');
const userModel = require('../../models/user.mongo');
const LocalStrategy = require('passport-local').Strategy;

const {
    getUserProfile,
} = require('../../models/user.model');

const userRouter = express.Router();

const {
    createNewAccount
} = require('./user.controller');

// Initialize passport
userRouter.use(passport.initialize());
userRouter.use(passport.session());

passport.use(new LocalStrategy({
    usernameField: 'userEmail',
    passwordField: 'password'
}, userModel.authenticate()));

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

userRouter.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/dashboard'
    }, (err, user, info) => {
        if (err) { 
            return res.status(500).json({ error: err.message });
        } 
        if (!user) {
            return res.json({ error: "Password or email is incorresct"});
        }

        res.redirect('/');
        
        console.log("Login successful!");
        
    })(req, res, next);
});

userRouter.get('/logout', (req, res) => {
    req.logout(err => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.redirect('/')
    });
});

userRouter.get('/profile/:userId', getUserProfile);
userRouter.post('/create-account', createNewAccount);
// userRouter.post('/login/local', p);
// userRouter.post('/logout/local', createNewAccount);
// userRouter.put('/update-account/:userId', updateAccount);
// userRouter.delete('/delete-account/:userId', deleteAccount);




module.exports = userRouter;