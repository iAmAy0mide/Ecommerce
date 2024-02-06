const {
    createNewUser
} = require('../../models/user.model');

async function createNewAccount(req, res) {
    const userInfo = req.body;
    // console.log(userInfo.userEmail);
    
    const user = await createNewUser(userInfo);
    console.log(user)
    return res.status(200).json(await createNewUser(userInfo));
}

module.exports = {
    createNewAccount,
};