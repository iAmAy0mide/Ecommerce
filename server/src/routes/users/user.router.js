const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const userModel = require('../../models/user.mongo');

const {
    createNewUser,
    getUserProfile,
} = require('../../models/user.model');

const userRouter = express.Router();

const {
    createNewAccount
} = require('./user.controller');

passport.use(new LocalStrategy({
    usernameField: 'userEmail',
    passwordField: 'password'
}, async (userEmail, password, done) => {
   
    try {
        const user = await userModel.findOne({ userEmail }, 'password userEmail -_id');
        console.log(user);
        if (user) {
            const matchPassword = await bcrypt.compare(password, user.password);
          
            console.log(matchPassword)
            if (matchPassword) {
                console.log("match");
                return done(null, user.userEmail);
            } else {
                return done(null, false);
            }
        }
    } catch(error) {
        return done(error)
    }
}));

userRouter.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!user) {
            return res.status(401).json({ error: "Authentication failed" });
        }
        // If authentication was successful, manually log in the user
        req.login(user, { session: false }, (loginErr) => {
            if (loginErr) {
                return res.status(500).json({ error: loginErr.message });
            }
            // Send a JSON response with the authenticated user
            return res.json({ user: user });
        });
    })(req, res, next);
});
userRouter.get('/profile/:userId', getUserProfile);
userRouter.post('/create-account', createNewAccount);
// userRouter.post('/login/local', p);
// userRouter.post('/logout/local', createNewAccount);
// userRouter.put('/update-account/:userId', updateAccount);
// userRouter.delete('/delete-account/:userId', deleteAccount);


module.exports = userRouter;