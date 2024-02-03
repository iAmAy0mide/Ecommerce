const bcrypt = require('bcrypt');
const userModel = require('./user.mongo');

function encryptPassword (password) {
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        return hashedPassword;
    });
}


function isValueExists(param) {
    return userModel.findOne(param, "_id");
}

function createNewUser(userInfo) {
    const { firstName, lastName, userEmail, password } = userInfo;

    if (isValueExists({userEmail})) {
        return "User already exists."
    }

    const hashedPassword = encryptPassword(password);

    const newUser = Object.assign({}, {
        firstName,
        lastName,
        userEmail,
        hashedPassword,
    });
    console.log(hashedPassword);

    userModel.create(newUser);
    return newUser;
}

module.exports = {
    createNewUser,
};