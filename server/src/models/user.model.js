const bcrypt = require('bcrypt');
const userModel = require('./user.mongo');

function encryptPassword (password) {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    
    return hashedPassword;
}

async function isValueExists(param) {
    try {
        const exists = await userModel.exists(param);
        return exists;    
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function createNewUser(userInfo) { 
    const { firstName, lastName, userEmail, password } = userInfo;
    const existsValue = await isValueExists({userEmail});

    if (existsValue) {
        return "User already exists";
    }
        const hashedPassword = encryptPassword(password);
    
        const newUser = Object.assign({
            firstName,
            lastName,
            userEmail,
            password: hashedPassword,
        }, {
            numOfProductsBought: 0,
            paymentMethod: [],
            userAddress: [],
            });
                
        try {
          const createdUser = await userModel.create(newUser);
          return createdUser;
        } catch (error) {
            throw new Error(error);
        }
}

async function getUserProfile() {
    
}

module.exports = {
    createNewUser,
    getUserProfile,
};