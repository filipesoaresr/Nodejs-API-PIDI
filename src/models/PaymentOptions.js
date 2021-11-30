const mongoose = require('mongoose');

const paymentOptionsSchema = new mongoose.Schema({

    _id: {
        type: String,
        required: true,
    },
    name: { 
        type: String,
        required: true,
    },
    flag: {
        type: String,
        required: false,
    },
    installment: {
        type: String,
        require: false,
        default: 'Sem parcelamento',

    }
});


module.exports = mongoose.model('PaymentOptions', paymentOptionsSchema);