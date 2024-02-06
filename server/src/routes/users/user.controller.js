const {
    createNewUser
} = require('../../models/user.model');

async function createNewAccount(req, res) {
    const userInfo = req.body;
    try {
        return res.status(200).json(await createNewUser(userInfo));
    } catch (error) {        
        return res.status(500).json({
            success: false,
            message: error
        });
    }
    
}

module.exports = {
    createNewAccount,
};