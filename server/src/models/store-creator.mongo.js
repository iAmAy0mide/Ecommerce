const mongoose = require('mongoose');

const storeCreatorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    profilPics: {
        type: String,
    },
    contacts: {
        email: {
            type: String,
        },
        phoneNumber: {
            type: Number
        }
    },
    storeCreatorAddress: [
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