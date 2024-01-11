const mongoose = require('mongoose');

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
    paymentMethod: {
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

module.exports = mongoose.model('User', userSchema);