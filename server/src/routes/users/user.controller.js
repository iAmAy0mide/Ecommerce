const {
    createNewUser
} = require('../../models/user.model');

function createNewAccount(req, res) {
    const userInfo = req.body;
    console.log(userInfo);

    return res.status(200).json(createNewUser(userInfo));
}

module.exports = {
    createNewAccount,
};