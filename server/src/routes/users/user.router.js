const express = require('express');
const bcrypt = require('bcrypt');
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
        console.log({"info": info})
        if (err) { 
            return res.status(500).json({ error: err.message });
        } 
        if (!user) {
            return res.json({ error: "Password or email is incorresct"});
        }
        console.log("Login successful!")

    })(req, res, next);
});

userRouter.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/')
});

// passport.use(new LocalStrategy({
//     usernameField: 'userEmail',
//     passwordField: 'password'
// }, async (userEmail, password, done) => {
   
//     try {
//         const user = await userModel.findOne({ userEmail }, 'password userEmail -_id');

//         if (user) {
//             const matchPassword = await bcrypt.compare(password, user.password);
          
//             if (matchPassword) {
//                 return done(null, user.userEmail);
//             } else {
//                 throw new Error("Password is incorrect");
//             }
//         } else {
//             throw new Error("Email does not exist");
//         }
//     } catch(error) {
//         return done(error)
//     }
// }));

// userRouter.post('/login', (req, res, next) => {
//     passport.authenticate('local', { session: false }, (err, user, info) => {
//         if (err) {
//             return res.status(500).json({ error: err.message });
//         }

//         if (!user) {
//             return res.status(401).json({ error: "Authentication failed" });
//         }

//         // If authentication was successful, manually log in the user
//         req.login(user, { session: false }, (loginErr) => {
//             if (loginErr) {
//                 return res.status(500).json({ error: loginErr.message });
//             }
//             // Send a JSON response with the authenticated user
//             return res.json({ user: user });
//         });
//     })(req, res, next);
// });

// userRouter.get('/logout', (req, res) => {
//     passport.authenticate('local', { session: false }, () => {
//         req.logout((done) => {
//             done
//         });
//         res.redirect(301, '../')
//     })(req, res)
// });
userRouter.get('/profile/:userId', getUserProfile);
userRouter.post('/create-account', createNewAccount);
// userRouter.post('/login/local', p);
// userRouter.post('/logout/local', createNewAccount);
// userRouter.put('/update-account/:userId', updateAccount);
// userRouter.delete('/delete-account/:userId', deleteAccount);


module.exports = userRouter;