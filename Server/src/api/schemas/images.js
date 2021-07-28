const mongoose = require('mongoose');

const { Schema } = mongoose;

const imgSchema = new Schema ({
    nameOfImg: String,
    category: String,
    parent_id: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
});

const imgInsert = mongoose.model('images', imgSchema);

module.exports = imgInsert;