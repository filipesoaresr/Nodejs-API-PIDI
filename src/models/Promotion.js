const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({

    _id: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    startDate: {
        type: Date,
        required: true,
    },

    endDate: {
        type: Date,
        required: false,
    },
    discount: {
        type: String,
        required: false,
    }
})

module.exports = mongoose.model('Promotion', promotionSchema);