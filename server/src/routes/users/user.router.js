const express = require('express');
const {
    createNewUser,
} = require('../../models/user.model');

const userRouter = express.Router();

const {
    createNewAccount
} = require('./user.controller')

// userRouter.get('/profile/:userId', getUserProfile);
userRouter.post('/create-account', createNewAccount);
// userRouter.put('/update-account/:userId', updateAccount);
// userRouter.delete('/delete-account/:userId', deleteAccount);


module.exports = userRouter;