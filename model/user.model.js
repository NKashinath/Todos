const mongoose = require('mongoose');

const userModel = mongoose.model('userData', {
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
})
module.exports = userModel;