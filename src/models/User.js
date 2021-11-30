const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: false,
    },
    dateCreated: {
        type: Date,
        required: false,
    },
    role: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', userSchema);