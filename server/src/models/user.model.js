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

// async function createNewUser(userInfo) { 
//     const { firstName, lastName, userEmail, password } = userInfo;
//     const existsValue = await isValueExists({userEmail});

//     if (existsValue) {
//         return "User already exists";
//     }
//         const hashedPassword = encryptPassword(password);
    
//         const newUser = Object.assign({
//             firstName,
//             lastName,
//             userEmail,
//             password: hashedPassword,
//         }, {
//             numOfProductsBought: 0,
//             paymentMethod: [],
//             userAddress: [],
//             });
                
//         try {
//           const createdUser = await userModel.create(newUser);
//           return createdUser;
//         } catch (error) {
//             throw new Error(error);
//         }
// }

async function createNewUser(userInfo) {
    const { firstName, lastName, userEmail, password } = userInfo

    const userData = Object.assign({
        userEmail,
        firstName,
        lastName,
    }, {
        numOfProductsBought: 0,
        paymentMethods: [],
        userAddress: []
    });
    userModel.register(userData, password , (err) => {
        return "A user with the given email is already registered";
        if(err) {
            console.log(err);
        }
        
        return "A user with the given email is already registered"
        // return userData.userEmail
    });
}

async function getUserProfile() {
    
}
 
module.exports = {
    createNewUser,
    getUserProfile,
};