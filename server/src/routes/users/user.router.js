const express = require('express');
const {
    getUserProfile,
} = require('../../models/user.model');

const userRouter = express.Router();

const {
    createNewAccount
} = require('./user.controller');

userRouter.get('/profile', authenticateUser, getUserProfile);
userRouter.post('/create-account', createNewAccount);
// userRouter.post('/login/local', p);
// userRouter.post('/logout/local', createNewAccount);
// userRouter.put('/update-account/:userId', updateAccount);
// userRouter.delete('/delete-account/:userId', deleteAccount);



async function authenticateUser(req, res, next) {
    console.log(req.isAuthenticated())
   if (req.isAuthenticated()) {
    return next();
   } else {
     return res.status(401).json({ mesg: "Your are not logged in."});
      
    }
}

module.exports = userRouter;