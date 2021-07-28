const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema ({
    nameOfCust: String,
    subject: String,
    parent_id: {
        type: String,
        required: true
    },
    body: {
        type: String
    },
    rating: Number,
    $currentDate: { timereview: Date}
});

const reviewInsert = mongoose.model('reviewInsert', reviewSchema);

module.exports = reviewInsert;