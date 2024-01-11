const mongoose = require('mongoose');

const productReviewSchema = new mongoose.Schema({
    reviews: [
                {
                    reviewBy: {
                        type: mongoose.Types.ObjectId,
                        required: true
                    },
                    reviewContent: {
                        type: String,
                        required: true,
                    },
                    reviewedProduct: {
                        type: mongoose.Types.ObjectId,
                        required: true,
                    },
                    numReviews: {
                        type: Number,
                    },
                }
        ]
});

module.exports = mongoose.model('ProductReview', productReviewSchema);