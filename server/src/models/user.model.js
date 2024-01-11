const userModel = require('./user.mongo');

function createNewUser(userInfo) {
    const { firstName, lastName, userEmail, password } = userInfo;

    userModel.create()
}