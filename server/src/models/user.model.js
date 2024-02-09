const userModel = require('./user.mongo');

function createNewUser(userInfo) {

    return new Promise((resolve, reject) => {
        const { firstName, lastName, userEmail, password } = userInfo;

        const userData = Object.assign({
            userEmail,
            firstName,
            lastName,
        }, {
            numOfProductsBought: 0,
            paymentMethods: [],
            userAddress: []
        });
    
        userModel.register(userData, password, (err) => {
            if (err) {
                reject({
                    error: "A user with the given email is already registered",
                    success: false
                });
                return;
            }
    
            resolve({
                success: true,
                userEmail: userData['userEmail']
            });
        });
    });   
}

async function getUserProfile(req, res) {
    return res.status(200).json({ message: 'here is your profile'})
}
 
module.exports = {
    createNewUser,
    getUserProfile,
};