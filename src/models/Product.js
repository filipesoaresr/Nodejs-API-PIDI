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
        required: false,
    },
    p: {
        type: Number,
        default: 0,
        required: false,
    },
    m: {
        type: Number,
        default: 0,
        required: false,
    },
    g: {
        type: Number,
        default: 0,
        required: false,
    },
    gg: {
        type: Number,
        default: 0,
        required: false,
    },
    promotion: {
        type: String,
        default: "Nenhuma"
    },
    value: {
        type: Number,
        required: true,
        default: 0,
    }
});

module.exports = mongoose.model('Product', productSchema);