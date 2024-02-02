const express = require('express');

const userRouter = express.Router();

userRouter.get('/profile/:userId', getUserProfile);
userRouter.post('/create-account', createNewAccount);
userRouter.put('/update-account/:userId', updateAccount);
userRouter.delete('/delete-account/:userId', deleteAccount);


module.exports = userRouter;