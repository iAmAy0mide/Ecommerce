const mongoose = require('mongoose');

const userCartSchema = mongoose.Schema({
    cartId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    products: [
        {
            prodId: {
                type: mongoose.Types.ObjectId
            },
            count: {
                type: Number
            }
        }
    ]
});

module.exports = mongoose.model('UserCart', userCartSchema);