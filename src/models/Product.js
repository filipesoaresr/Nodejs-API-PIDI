const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   
    _id: {
        type: String,
        required: true,
    },
    productType: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    colection: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        required: false,
       
    },
    pp: {
        type: Number,
        default: 0,
    },
    p: {
        type: Number,
        default: 0,
    },
    m: {
        type: Number,
        default: 0,
    },
    g: {
        type: Number,
        default: 0,
    },
    gg: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model('Product', productSchema);