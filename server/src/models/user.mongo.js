const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
    },
    password: {
        type: String,
    },
    // phoneNumber: {
    //     type: Number,
    //     required: true,
    // },
    paymentMethods: {
        type: [ mongoose.Types.ObjectId ]
    },
    numOfProductsBought: {
        type: Number,
    },
    userAddress: [
        {
            streetNumber: {
                type: Number,
                required: true,
            },
            addressLine1: {
                type: String,
                required: true,
            },
            addressLine2: {
                type: String,
                required: true,
            },
            isDefault: {
                type: Boolean,
            },
        }
    ]
});


userSchema.plugin(passportLocalMongoose, { usernameField: 'userEmail' });

module.exports =  mongoose.model('User', userSchema);