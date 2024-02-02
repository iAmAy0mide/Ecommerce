const mongoose = require('mongoose');

const storeProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productDescriptiion: {
        type: String,
        required: true,
    },
    productDiscount: {
        type: Number,
    },
    totalProductRating: {
        type: Number,
    },
    numProductRating: {
        type: Number,
    },
    productStore: {
        type: mongoose.Types.ObjectId,
    },
    productReview: {
        type: [ mongoose.Types.ObjectId ],
    },
    productCategory: {
        type: [ String ],
    },
    productTags: {
        type: [ String ],
    },
    productQuantity: {
        type: Number,
    }
});

module.exports = mongoose.model('StoreProduct', storeProductSchema);