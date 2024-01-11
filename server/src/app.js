const express = require('express');

const userRouter = require('./routes/users/user.router');
const storeCreatorRouter = require('./routes/store-creator/store-creator.router');



const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/store');

app.get('/', (req, res) => {
    res.send('Yo man');
});

module.exports = app;