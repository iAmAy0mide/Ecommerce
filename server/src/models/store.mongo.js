const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    storeName: {
        type: String,
        required: true,
    },
    storeDescription: {
        type: String,
        required: true,
    },
    storeTag: {
        type: [ String ],
        required: true,
    },
    storeProducts: {
        type: [ mongoose.Types.ObjectId ],
        index: true,
    },
    storeCreator: {
        type: mongoose.Types.ObjectId,
    }
});

module.exports = mongoose.model('Store', storeSchema);