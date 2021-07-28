const mongoose = require('mongoose');

const { Schema } = mongoose;

const locSchema = new Schema ({
    category: String,
    name: {
        type: String,

    },
    url: String,
    coordinates: {
        latitude: {
            type: Number,

            min: -90,
            max: 90
        },
        longitude: {
            type: Number,

            min: -180,
            max: 180
        }
    }
});

const locInsert = mongoose.model('locInsert', locSchema);

module.exports = locInsert;