const {
    createNewUser
} = require('../../models/user.model');

async function createNewAccount(req, res) {
    const userInfo = req.body;
    // console.log(userInfo.userEmail);

    return res.status(200).json(await createNewUser(userInfo));
}

module.exports = {
    createNewAccount,
};